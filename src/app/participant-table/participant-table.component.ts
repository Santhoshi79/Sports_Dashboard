import { Component } from '@angular/core';


export interface PeriodicElement {
  position: number;
  Individualsports: string;
  Dualsports: String;
  Teamsports: String;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Individualsports: 'Surfing',       Dualsports:'Badminton',     Teamsports: 'Cricket'},
  {position: 2, Individualsports: 'Running',       Dualsports: 'Chess',        Teamsports: 'Football'},
  {position: 3, Individualsports: 'Bowling',       Dualsports: 'Tabletennis',  Teamsports: 'Soccer'},
  {position: 4, Individualsports: 'Sprint race',   Dualsports: 'Carroms',      Teamsports: 'Kabaddi'},
  {position: 5, Individualsports: 'Swimming',      Dualsports: 'Volleyball',   Teamsports: 'Baseball'},
  {position: 6, Individualsports: 'Skateboarding', Dualsports: 'Boxing',       Teamsports: 'Basketball'},
  {position: 7, Individualsports: 'Archery',       Dualsports: 'Cycling',      Teamsports: 'Hockey'},
  {position: 8, Individualsports: 'Diving',        Dualsports: 'Racing',       Teamsports: 'Rugby'},
  {position: 9, Individualsports: 'Skipping',      Dualsports: 'Long jump',    Teamsports: 'Softball'},
  {position: 10, Individualsports:'Cycling',       Dualsports: 'Javelin throw',Teamsports: 'Handball'},
];


@Component({
  selector: 'app-participant-table',
  templateUrl: './participant-table.component.html',
  styleUrls: ['./participant-table.component.css']
})
export class ParticipantTableComponent {

  displayedColumns = ['position', 'Individual','Dual','Team'];

}
