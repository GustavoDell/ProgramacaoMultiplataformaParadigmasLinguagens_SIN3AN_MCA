import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { DestinoLivroPage } from '../destino-livro/destino-livro';
/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
})
export class LivrosPage {
  public livros : Livro[]; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var l1 = {titulo:'Spring MVC', subtitulo:'web java', editora:'Casa do Codigo', autor: 'Alberto Souza', isbn:'978-85-5519-019-3', publicacao:'04/2015',paginas: '260'};     
    var l2 = {titulo:'Xvideos', subtitulo:'Porn', editora:'Casa do Codigo', autor: 'Alberto Souza', isbn:'978-85-5519-019-3', publicacao:'04/2015',paginas: '260'};     
    
    this.livros = [l1, l2];
}
  irParaDestinoLivro (livro:Livro):void{
    this.navCtrl.push(DestinoLivroPage, {livroSelecionado: livro});
  }

ionViewDidLoad() {
    console.log('ionViewDidLoad LivrosPage');
  }

}
