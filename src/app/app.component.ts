import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { chartOptions } from '../directives';
import { HttpService, Request, RequestQuery } from '../providers';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('requestChart') requestChart;
  chartOptions;
  requests: RequestQuery;

  constructor(private httpService: HttpService) {
    this.chartOptions = chartOptions;
  }

  ngAfterViewInit() {
    this.httpService.getRequestQuery()
      .then(data => {
        this.sortData(data);
        this.requests = data;
        this.drawGraph([data.pending.length, data.accepted.length, data.declined.length]);
      });
  }

  requestClicked(request: Request, type: string) {
    console.log('request clicked - ' + type);
    console.log(request);
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

  sortData(data: RequestQuery) {
    _.forEach(data, (value, key) => {
      data[key] = _.sortBy(value, ['timestamp']);
    });
  }

  getWaitingTime(epoch: number): string {
    const then = moment(epoch * 1000);
    const now = moment();
    return _.round(moment.duration(now.diff(then)).asHours()) + ' hours';
  }
}
