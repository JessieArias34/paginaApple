import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IpadPrimeraparteComponent } from './ipad-primeraparte/ipad-primeraparte.component';

import { SecionChanComponent } from './secion-chan/secion-chan.component';


import { SegundaBarraComponent } from './segunda-barra/segunda-barra.component';
import { SegundaBarra2Component } from './segunda-barra2/segunda-barra2.component';
import { UltimaiPhoneComponent } from './ultimai-phone/ultimai-phone.component';

import { AppleComponent } from './apple/apple.component';


@NgModule({
  declarations: [
    AppComponent,

    IpadPrimeraparteComponent,

    SecionChanComponent,



    SegundaBarraComponent,
    SegundaBarra2Component,
    UltimaiPhoneComponent,



    AppleComponent,




  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
