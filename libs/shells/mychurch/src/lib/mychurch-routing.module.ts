import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MychurchComponent } from './mychurch.component';

export const mchurchRoutes: Route[] = [
  {
    path: '', component: MychurchComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(mchurchRoutes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class MychurchRoutingModule { }
