import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { chartOptions } from '../directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('requestChart') requestChart;
  chartOptions;

  constructor() {
    this.chartOptions = chartOptions;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.drawGraph([100, 55, 20]);
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
}
