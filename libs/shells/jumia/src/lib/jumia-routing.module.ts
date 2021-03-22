import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumiaComponent } from './jumia.component';

const routes: Routes = [
  {
    path: '', component: JumiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class JumiaRoutingModule { }
