import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashAboutComponent} from './dash-about/dash-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '/about',
    component: DashAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
