import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecionChanComponent } from './secion-chan/secion-chan.component';

@NgModule({
  declarations: [
    AppComponent,
    SecionChanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
