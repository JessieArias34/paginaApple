import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IpadPrimeraparteComponent } from './ipad-primeraparte/ipad-primeraparte.component';

@NgModule({
  declarations: [
    AppComponent,
    IpadPrimeraparteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
