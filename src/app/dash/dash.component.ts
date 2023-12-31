import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title1: 'Card 1', cols: 1, rows: 1 },
          { title2: 'Card 2', cols: 1, rows: 1 },
          { title3: 'Card 3', cols: 1, rows: 1 },
          { title4: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title1: 'Card 1', cols: 2, rows: 1 },
        { title2: 'Card 2', cols: 1, rows: 1 },
        { title3: 'Card 3', cols: 1, rows: 2 },
        { title4: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
