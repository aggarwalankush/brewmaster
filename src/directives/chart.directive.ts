import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';

Highcharts.setOptions({
  lang: {
    thousandsSep: ',',
    noData: 'No Data Available. Try other options.'
  }
});

@Directive({
  selector: '[myChart]',
  exportAs: 'myChart'
})
export class ChartDirective implements OnDestroy {
  hostElement: ElementRef;
  chartObj: Highcharts.ChartObject;

  constructor(ele: ElementRef) {
    this.hostElement = ele;
  }

  @Input('myChart')
  set options(opt: Highcharts.Options) {
    if (!opt) {
      console.log('No valid options...');
      console.log(opt);
      return;
    }
    if (opt.series || opt.data) {
      if (this.chartObj) {
        this.chartObj.destroy();
      }
      if (!opt.chart) {
        opt.chart = {};
      }
      opt.chart.renderTo = this.hostElement.nativeElement;
      this.chartObj = new Highcharts.Chart(opt);
    } else {
      console.log('No valid options...');
      console.dir(opt);
    }
  }

  public get chart(): Highcharts.ChartObject {
    return this.chartObj;
  }

  ngOnDestroy() {
    if (this.chartObj) {
      this.chartObj.destroy();
    }
  }
}

export let chartOptions = {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: ['Pending', 'Accepted', 'Declined'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: '# of Requests',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    },
    series: {
      animation: false
    }
  },
  credits: {
    enabled: false
  },
  series: [],
  tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b>' + ': ' + this.y;
    }
  }
};
