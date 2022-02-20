import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LazyDemoComponent } from './lazy-loading-routing/lazy-demo/lazy-demo.component';
import {CustomersRoutingModule} from './customers/customers-routing.module'

const routes: Routes = [
  {
    path:'data',
    component:DataComponent

  },
  {
    path:'customerdata',
    // component:LazyDemoComponent
    loadChildren:()=>CustomersRoutingModule
  },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
