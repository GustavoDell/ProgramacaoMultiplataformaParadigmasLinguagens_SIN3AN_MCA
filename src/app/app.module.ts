import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LivrosPage } from '../pages/livros/livros';
import { FilmesPage } from '../pages/filmes/filmes';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DestinoLivroPage } from '../pages/destino-livro/destino-livro';
import { HttpModule } from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LivrosPage,
    FilmesPage,
    DestinoLivroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LivrosPage,
    FilmesPage,
    DestinoLivroPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
