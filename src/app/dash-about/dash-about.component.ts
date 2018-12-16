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
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      let c = [
        {id: 1, cols: 1, rows: 1},
        {
          id: 2,
          cols: 3,
          rows: 2,
          title: 'Summary',
          content: ['Currently working as a software engineer',
            'Experience of 6 years of academic study and 3+ years with hands-on development',
            'I have very good knowledge about networking fundamentals/protocols and over 6 years of experience working with Linux systems.',
            'Experience of Agile/Scrum, SDLC(Requirements, Design, Development, Testing, Maintenance), Documentation and UML Designing',
            'Experience with web development frameworks and technologies such as HTML, JavaScript, CSS, and SASS',
            'Developed and invoked Restful web services',
            'Expertise in working with Relational Database Management Systems (RDBMS) such as MySQL, Oracle',
            'Experienced and passionate for coding in Python, Go, Java. React Native',
            'Applied experienced in debugging, implementing, troubleshooting and unit testing',
            'I am committed to developing my career as a software developer/Engineer and expand on the work experience']
        },
        {
          id: 3,
          cols: 1,
          rows: 1,
          title: 'About Me',
          content: 'A tech enthusiast and a lifelong learner. ' +
            'Programming and coding are my passion and enthusiasm that drives me and my career.' +
            'In addition to engineering software, I enjoy science, exploring new places, watching cricket, trying different food, ' +
            'working with gadgets, and drinking Chai.'
        },
      ];
      if (matches) {
        c.forEach(o => {
          o.cols = 4;
          o.rows = 4;
        });
        return c;
      }
      return c;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
