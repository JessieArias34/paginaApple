import { Component, OnInit } from '@angular/core';
import { Barra2_ipad } from "../barra2_ipad";
declare var $:any;
@Component({
  selector: 'app-segunda-barra',
  templateUrl: './segunda-barra.component.html',
  styleUrls: ['./segunda-barra.component.css']
})

export class SegundaBarraComponent implements OnInit {
nuevo="Nuevo";

barra_ipad: Barra2_ipad={
item1:"iPad Pro",
item2:"iPad",
item3:"iPad mini 4",
item4:"iOS 11",
item5:"Accesorios",
item6:"Comparar",
 }

  constructor() { }

  ngOnInit() {
    $('body').click(function(){
      $('body').css('background','red');
    })
  }

}
