import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  text: string="¿Por qué es importante comer sano? El hombre necesita alimentarse para vivir. Los nutrientes presentes en los alimentos le aportan la energía necesaria para hacer frente a las actividades diarias y mantener en funcionamiento su organismo.\n Por eso desde aquí lanzar un mensaje por una dieta equilibrada y variada";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



}
