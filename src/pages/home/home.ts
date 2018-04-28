import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  public text: String

  constructor(public navCtrl: NavController) {

    this.text = 'Bem-vindo a primeira página!'

  }

  irParaPagina2(){
    this.navCtrl.push(Pagina2Page)


}
}
