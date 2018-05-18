import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SegundaBarraComponent } from './segunda-barra/segunda-barra.component';
import { SegundaBarra2Component } from './segunda-barra2/segunda-barra2.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundaBarraComponent,
    SegundaBarra2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
