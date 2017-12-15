import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { chartOptions } from '../directives';
import { HttpService, Request } from '../providers';
import * as moment from 'moment';
import * as _ from 'lodash';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('requestChart') requestChart;
  chartOptions;

  pRequests: Array<Request>;
  aRequests: Array<Request>;
  dRequests: Array<Request>;

  constructor(private httpService: HttpService, public dialog: MatDialog, public snackBar: MatSnackBar) {
    this.chartOptions = chartOptions;
  }

  ngAfterViewInit() {
    this.httpService.getRequestQuery()
      .then(data => {

        this.pRequests = this.sortRequests(data.pending);
        this.aRequests = this.sortRequests(data.accepted);
        this.dRequests = this.sortRequests(data.declined);

        this.drawGraph([this.pRequests.length, this.aRequests.length, this.dRequests.length]);
      });
  }

  requestClicked(request: Request, type: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { request: request, type: type }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

      if (result === 'a') {
        this.removePRequest(request);
        this.addARequest(request);
      } else if (result === 'd') {
        this.removePRequest(request);
        this.addDRequest(request);
      }

    });
  }

  removePRequest(request: Request) {
    _.remove(this.pRequests, r => r.name === request.name);
  }

  addARequest(request: Request) {
    this.aRequests = this.sortRequests(_.concat(this.aRequests, request));
    this.snackBar.open('Request Approved', '', {
      duration: 1500
    });
  }

  addDRequest(request: Request) {
    this.dRequests = this.sortRequests(_.concat(this.dRequests, request));
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
    const then = moment(epoch * 1000);
    const now = moment();
    return _.round(moment.duration(now.diff(then)).asHours()) + ' hours';
  }
}
