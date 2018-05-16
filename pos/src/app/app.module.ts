import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SegundaBarraComponent } from './segunda-barra/segunda-barra.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundaBarraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
