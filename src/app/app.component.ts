import { Component, NgZone, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { chartOptions } from '../directives';
import { Request } from '../providers';
import * as moment from 'moment';
import * as _ from 'lodash';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import * as $ from 'jquery';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('requestChart') requestChart;
  chartOptions;

  pRequests: Array<Request> = [];
  aRequests: Array<Request> = [];
  dRequests: Array<Request> = [];

  constructor(public dialog: MatDialog,
              public snackBar: MatSnackBar,
              public zone: NgZone,
              private db: AngularFireDatabase) {
    this.chartOptions = chartOptions;
    this.initDB();
    setInterval(() => {
      this.initDB();
    }, 2000);
  }

  initDB() {
    Observable.zip(
      this.db.list('pending').valueChanges(),
      this.db.list('accepted').valueChanges(),
      this.db.list('declined').valueChanges()
    ).subscribe(([pData, aData, dData]) => {
      this.zone.run(() => {
        const tempAR = this.getJsonArray(aData, true);
        if (!_.isEqual(this.aRequests, tempAR)) {
          _.forEach(tempAR, request => {
            setTimeout(() => {
              this.toggleAnimation(request);
            }, 0);
          });
          this.aRequests = tempAR;
        }
        const tempDR = this.getJsonArray(dData, true);
        if (!_.isEqual(this.dRequests, tempDR)) {
          this.dRequests = tempDR;
        }
        const tempPR = this.removeRequests(this.getJsonArray(pData, false), this.aRequests, this.dRequests);
        if (!_.isEqual(this.pRequests, tempPR)) {
          this.pRequests = tempPR;
        }
        this.drawGraph([this.pRequests.length, this.aRequests.length, this.dRequests.length]);
      });
    });
  }

  removeRequests(arr, aR, dR) {
    _.forEach(aR, (v: any) => {
      _.remove(arr, (r: any) => r.name === v.name);
    });
    _.forEach(dR, (v: any) => {
      _.remove(arr, (r: any) => r.name === v.name);
    });
    return arr;
  }

  getJsonArray(data, setBot) {
    const arr: any = [];
    _.forEach(data, req => {
      const parsed = JSON.parse(req);
      parsed.timestamp = _.round(parsed.timestamp);
      arr.push(parsed);
    });
    this.setBot(arr, setBot);
    return this.sortRequests(arr);
  }

  requestClicked(request: Request, type: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { request: request, type: type }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'a') {
        this.removePRequest(request);
        this.addARequest(request);
        this.drawGraph([this.pRequests.length, this.aRequests.length, this.dRequests.length]);
      } else if (result === 'd') {
        this.removePRequest(request);
        this.addDRequest(request);
        this.drawGraph([this.pRequests.length, this.aRequests.length, this.dRequests.length]);
      }
    });
  }

  removePRequest(request: Request) {
    setTimeout(() => {
      _.remove(this.pRequests, r => r.name === request.name);
    }, 0);
  }

  addARequest(request: Request) {
    this.aRequests = this.sortRequests(_.concat(this.aRequests, request));
    setTimeout(() => {
      this.db.list('accepted').push(JSON.stringify(request));
    }, 0);
    this.snackBar.open('Request Approved, API initiated', '', {
      duration: 1500
    });
    setTimeout(() => {
      this.toggleAnimation(request);
    }, 5000);
  }

  addDRequest(request: Request) {
    this.dRequests = this.sortRequests(_.concat(this.dRequests, request));
    setTimeout(() => {
      this.db.list('declined').push(JSON.stringify(request));
    }, 0);
    this.snackBar.open('Request Declined', '', {
      duration: 1500
    });
  }

  drawGraph(data) {
    const chartObj = this.requestChart;
    while (chartObj.chart.series.length > 0) {
      chartObj.chart.series[0].remove(false);
    }
    chartObj.chart.addSeries({
      data: [
        { y: data[0], name: 'Pending', color: '#1D9DFC' },
        { y: data[1], name: 'Accepted', color: '#8fd17b' },
        { y: data[2], name: 'Declined', color: '#FD6585' }
      ]
    }, false);
    chartObj.chart.redraw();
  }

  sortRequests(requests: Array<Request>): Array<Request> {
    return _.sortBy(requests, ['timestamp']);
  }

  getWaitingTime(epoch: number): string {
    if (!epoch) {
      epoch = moment().valueOf() / 1000;
    }
    const then = moment(epoch * 1000);
    const now = moment();
    return _.round(moment.duration(now.diff(then)).asHours()) + ' hours';
  }

  removeSpaces(str: string): string {
    if (!str) {
      return '';
    }
    return str.replace(/\s/g, '');
  }

  setBot(requests: Array<Request>, isBot: boolean): void {
    _.forEach(requests, request => {
      request.bot = isBot;
    });
  }

  toggleAnimation(request: Request) {
    $('#' + this.removeSpaces(request.name) + request.timestamp + 'loader').toggleClass('load-complete');
    $('#' + this.removeSpaces(request.name) + request.timestamp + 'checkmark').toggle();
  }
}
