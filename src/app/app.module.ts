import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { AddFilmComponent } from './add-film/add-film.component';
import { YearPipe } from './Pipes/year.pipe';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { AboutComponent } from './about/about.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    AddFilmComponent,
    YearPipe,
    HomeComponent,
    FilmsComponent,
    AboutComponent,
    FourOhFourComponent,
    DetailFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
