import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashNavComponent} from './dash-nav/dash-nav.component';

const routes: Routes = [
  {
    path: '',
    component: DashNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
