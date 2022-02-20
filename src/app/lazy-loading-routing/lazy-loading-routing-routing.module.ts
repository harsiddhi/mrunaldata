import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';


const routes: Routes = [
  {
    path: '',
    component: LazyDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }