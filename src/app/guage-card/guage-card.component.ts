// import { Component, ViewEncapsulation } from '@angular/core';
// import { ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-angular-circulargauge';

// @Component({
//   selector: 'app-guage-card',
//   templateUrl: './guage-card.component.html',
//   styleUrls: ['./guage-card.component.css']
// })
// export class GuageCardComponent {





// @Component({
//     selector: 'control-content',
//     templateUrl: 'default.html',
//     encapsulation: ViewEncapsulation.None
// })

//     public ticks: Object = {
//         width: 0
//     };
//     public lineStyle: Object = {
//         width: 8
//     };
    
//     public load(args: ILoadedEventArgs): void {
//         let selectedTheme: string = location.hash.split('/')[1];
//         selectedTheme = selectedTheme ? selectedTheme : 'Material';
//         args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
//         selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i,  'Contrast');
//     }
    
//     public labelStyle: Object = {
//         font: {
//             fontFamily: 'Roboto',
//             size: '12px',
//             fontWeight: 'Regular'
//         },
//         offset: -5
//     };
//     public cap: Object = {
//         radius: 8,
//         border: { width: 0 }
//     };
//     public tail: Object = {
//         length: '25%',
//     }
//     constructor() {
//         // code
//     };
// }

