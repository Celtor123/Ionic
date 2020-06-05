import { Component } from '@angular/core';
import {Li} from "../../app/li";
import {Lista} from "../../app/Lista";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  li: Li
  url: string;

  b=Lista;
  a=this.b[name];

  onSelect(seleccionado: string): void{
    console.log(seleccionado)
    if (seleccionado=="na")
    {

      this.url="El nabo está a "+this.b[0].price

    }
    if (seleccionado=="to"){
      this.url="El tomate está a" +this.b[1].price
    }
    if (seleccionado=="pi"){
      this.url="El pimiento está a" + this.b[2].price
    }
    if (seleccionado=="cha"){
      this.url="El chorizo está a" + +this.b[3].price
    }
    if (seleccionado=="za"){
      this.url="El zanahoria está a" + +this.b[4].price
    }
    if (seleccionado=="qu"){
      this.url="El queso está a" + this.b[5].price
    }
  }

  myFunction() {
    console.log("botón clickeado")

  }
  yourFunction(fo:string) {
    console.log(fo)
  }





}

