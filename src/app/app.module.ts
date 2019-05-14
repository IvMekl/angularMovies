import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowAllMoviesComponent } from './components/show-all-movies/show-all-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ShowMovieDetailsComponent } from './components/show-movie-details/show-movie-details.component';
import { SearchByIdComponent } from './components/search-by-id/search-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowAllMoviesComponent,
    AddMovieComponent,
    ShowMovieDetailsComponent,
    SearchByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
