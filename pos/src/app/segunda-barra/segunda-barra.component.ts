import { Component, OnInit } from '@angular/core';
import { Barra2_ipad } from "../../assets/class/barra2_ipad";
declare var $: any;
@Component({
  selector: 'app-segunda-barra',
  templateUrl: './segunda-barra.component.html',
  styleUrls: ['./segunda-barra.component.css']
})

export class SegundaBarraComponent implements OnInit {
  nuevo = "Nuevo";

  barra_ipad: Barra2_ipad = {
    item1: "iPad Pro",
    item2: "iPad",
    item3: "iPad mini 4",
    item4: "iOS 11",
    item5: "Accesorios",
    item6: "Comparar",
  }

  constructor() { }

  ngOnInit() {

    $('.boton_izq').click(function () {
      event.preventDefault();
      $('#barra_ipad').animate({
        scrollLeft: "+=100px"
      }, "slow");
    });

    $('.boton_der').click(function () {
      event.preventDefault();
      $('#barra_ipad').animate({
        scrollLeft: "-=100px"
      }, "slow");
    });
  }

}
