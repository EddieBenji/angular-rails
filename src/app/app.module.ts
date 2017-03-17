import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomepageComponent }  from './homepage/homepage.component';
import { AppComponent } from "./app.component";
import { FreelanceRouting } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FreelanceRouting
  ],
  declarations: [ AppComponent, HomepageComponent ],

  //What component you want to start:
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
