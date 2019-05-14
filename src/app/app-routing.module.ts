import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowAllMoviesComponent } from './components/show-all-movies/show-all-movies.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ShowMovieDetailsComponent } from './components/show-movie-details/show-movie-details.component';
import { SearchByIdComponent } from './components/search-by-id/search-by-id.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/showAllMovies',
  pathMatch: 'full'
},
{
  path: 'showAllMovies',
  component: ShowAllMoviesComponent
},
{
  path: 'addMovie',
  component: AddMovieComponent
},
{
  path: 'showMovieDetails/:id',
  component: ShowMovieDetailsComponent
},
{
  path: 'searchById',
  component: SearchByIdComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
