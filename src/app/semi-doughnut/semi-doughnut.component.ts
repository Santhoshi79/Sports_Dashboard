import { Component, OnInit } from '@angular/core';
// import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
interface HighchartsStatic { chart(id: string, options: any): any; }

import { Chart } from 'chart.js';

import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-semi-doughnut',
  templateUrl: './semi-doughnut.component.html',
  styleUrls: ['./semi-doughnut.component.css']
})
export class SemiDoughnutComponent{
  
public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      plotShadow: false,
      borderWidth: 0,
    },
    title: {
      text: 'Overall<br>result',
      align: 'center',
      verticalAlign: 'middle',
      y: 50,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0px 1px 2px black',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
        innerSize: '50%',
      },
    },
    series: [
      {
        type: 'pie',
        // name: 'Browser share',
        data: [
          // ['Firefox', 45.0],
          // ['IE', 26.8],
          // ['Chrome', 12.8],
          // ['Safari', 8.5],
          // ['Opera', 6.2],
          {
            name: 'Others',
            y: 0.7,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    ],
  };




 }
















