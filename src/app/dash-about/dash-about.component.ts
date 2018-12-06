import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-dash-about',
  templateUrl: './dash-about.component.html',
  styleUrls: ['./dash-about.component.scss'],
})
export class DashAboutComponent {
  /** Based on the screen size, switch from standard to one column per row */
  gLCols = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      return matches ? 1 : 2;
    })
  );
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return [
          {title: 'Card 2', cols: 1, rows: 1, content: 'My Image'},
          {title: 'Card 3', cols: 1, rows: 1, content: 'About me'},
          {title: 'Card 4', cols: 1, rows: 1, content: 'Summary'}
        ];
      }

      return [
        {title: 'Card 2', cols: 1, rows: 1, content: 'My Image'},
        {title: 'Card 3', cols: 1, rows: 2, content: 'About me'},
        {title: 'Card 4', cols: 1, rows: 1, content: 'Summary'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
