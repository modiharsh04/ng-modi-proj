import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-dash-about',
  templateUrl: './dash-about.component.html',
  styleUrls: ['./dash-about.component.scss'],
})
export class DashAboutComponent {
  /** Based on the screen size, switch from standard to one column per row */
  summary = [
    'Currently working as a software engineer',
    'Experience of 6 years of academic study and 3+ years with hands-on development',
    'I have very good knowledge about networking fundamentals/protocols and over 6 years of experience working with Linux systems.',
    'Experience of Agile/Scrum, SDLC(Requirements, Design, Development, Testing, Maintenance), Documentation and UML Designing',
    'Experience with web development frameworks and technologies such as HTML, JavaScript, CSS, and SASS',
    'Developed and invoked Restful web services',
    'Expertise in working with Relational Database Management Systems (RDBMS) such as MySQL, Oracle',
    'Experienced and passionate for coding in Python, Go, Java. React Native',
    'Applied experienced in debugging, implementing, troubleshooting and unit testing',
    'I am committed to developing my career as a software developer/Engineer and expand on the work experience',
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
