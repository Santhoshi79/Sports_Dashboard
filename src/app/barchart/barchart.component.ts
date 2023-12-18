import { Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts/es-modules/masters/highcharts.src';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit{

  constructor() { }

   ngOnInit() {
      const options: any = {
         chart: {
            type: 'bar'
         },
         title: {
            text: 'Sport Data'
         },
         xAxis: {
            categories: ['CVR', 'CVSR', 'VASAVI', 'VIGNAN', 'CMR'],
            title: {
               text: null
            }
         },
         yAxis: {
            min: 0,
            max:200,
            // title: {
            //    text: 'Students',
            //    align: ''
            // },
            labels: {
               overflow: 'justify'
            }
         },
        //  tooltip: {
        //     valueSuffix: ''
        //  },
         plotOptions: {
            bar: {
               dataLabels: {
                  enabled: true
               }
            }
         },
         legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
         },
         credits: {
            enabled: false
         },
         series: [
            {
               name: 'Individual',
               data: [107, 31, 635, 203, 2]
            },
            {
               name: 'Dual',
               data: [133, 156, 947, 408, 6]
            },
            {
               name: 'Team',
               data: [973, 914, 4054, 732, 34]
            }
         ]
      };

      Highcharts.chart('chart', options);
   }

}