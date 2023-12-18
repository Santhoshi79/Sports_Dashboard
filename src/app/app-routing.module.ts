import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ParticipantTableComponent } from './participant-table/participant-table.component';

const routes: Routes = [{ path: 'dashboard', component: DashComponent }];
//const routes:Routes=[{path:'participant',component:ParticipantTableComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
