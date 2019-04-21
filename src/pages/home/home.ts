import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivrosPage } from '../livros/livros';
import { FilmesPage } from '../filmes/filmes';
import { Livro } from '../../model/livro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  public livro : Livro;
  
  constructor(public navCtrl: NavController ) {
     
  }
   

  irParaLivrosPage(){
    this.navCtrl.push(LivrosPage);
  }

  goToFilmesPage(){
    this.navCtrl.push(FilmesPage);
  }
}
