import { Component, OnInit } from '@angular/core';
import { Barra2_iphone } from "../../assets/class/barra2_iphone";
declare var $: any;
@Component({
  selector: 'app-segunda-barra2',
  templateUrl: './segunda-barra2.component.html',
  styleUrls: ['./segunda-barra2.component.css']
})
export class SegundaBarra2Component implements OnInit {
  nuevo = "Nuevo";

  barra_iphone: Barra2_iphone = {
    item1: "iPhone X",
    item2: "iPhone 8",
    item3: "iPhone 7",
    item4: "iPhone 6s",
    item5: "iPhone SE",
    item6: "iOS 11",
    item7: "Accesorios",
    item8: "Comparar",
  }

  constructor() { }

  ngOnInit() {

    $('#boton_izq_iphone').click(function () {
      event.preventDefault();
      $('#barra_iphone').animate({
        scrollLeft: "+=100px"
      }, "slow");
    });

    $('#boton_der_iphone').click(function () {
      event.preventDefault();
      $('#barra_iphone').animate({
        scrollLeft: "-=100px"
      }, "slow");
    });
  }
}
