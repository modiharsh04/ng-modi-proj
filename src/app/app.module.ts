import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashNavComponent} from './dash-nav/dash-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material.module';
import {AboutComponent} from './about/about.component';
import { DashAboutComponent } from './dash-about/dash-about.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    DashNavComponent,
    AboutComponent,
    DashAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [DashNavComponent]
})
export class AppModule {
}
