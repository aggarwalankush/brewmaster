import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppComponent } from './app.component';
import { ChartDirective } from '../directives';


@NgModule({
  declarations: [
    AppComponent,
    ChartDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
