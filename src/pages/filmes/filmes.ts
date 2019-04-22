import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
  providers: [
    MovieProvider /*Injetando o movieprovider para pagina filme*/
  ]
})
export class FilmesPage {

  public lista_filmes = new Array<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams, private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FilmesPage');
    this.movieProvider.getPopular().subscribe(
      data =>{
        const response = (data as any);
        const object_retorno = JSON.parse(response._body);
        this.lista_filmes = object_retorno.results;
        console.log(object_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
