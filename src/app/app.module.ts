import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { CardComponent } from './card/card.component';
import { HighchartsChartModule } from 'highcharts-angular';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ParticipantTableComponent } from './participant-table/participant-table.component';
import { SemiDoughnutComponent } from './semi-doughnut/semi-doughnut.component';
//import { ProfressSpinnerComponent } from './profress-spinner/profress-spinner.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StepperComponent } from './stepper/stepper.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
//import { GuageCardComponent } from './guage-card/guage-card.component';
//import { MatLabel } from '@angular/material/form-field';
// import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
// var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    // CanvasJSChart,
    ParticipantTableComponent,
    SemiDoughnutComponent,
    
    BarchartComponent,
    PieChartComponent,
    StepperComponent,
   // BarChartComponent,
        
    
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HighchartsChartModule
  
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
