import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { LazyDemoComponent } from './lazy-loading-routing/lazy-demo/lazy-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    LazyDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
