import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';

const routes:Routes = [
  {
    path:'',
    component:LazyDemoComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    
  ]
})
export class LazyLoadingRoutingModule { }
