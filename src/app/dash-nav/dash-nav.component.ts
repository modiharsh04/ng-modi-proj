import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss'],
})
export class DashNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver) {
    iconRegistry.addSvgIcon(
      'gh-ic',
      sanitizer.bypassSecurityTrustResourceUrl('assets/gh.svg'));
    iconRegistry.addSvgIcon(
      'fb-ic',
      sanitizer.bypassSecurityTrustResourceUrl('assets/fb.svg'));
    iconRegistry.addSvgIcon(
      'i-ic',
      sanitizer.bypassSecurityTrustResourceUrl('assets/i.svg'));
    iconRegistry.addSvgIcon(
      'in-ic',
      sanitizer.bypassSecurityTrustResourceUrl('assets/in.svg'));
  }
}
