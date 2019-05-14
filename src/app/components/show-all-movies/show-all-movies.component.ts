import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-show-all-movies',
  templateUrl: './show-all-movies.component.html',
  styleUrls: ['./show-all-movies.component.css']
})
export class ShowAllMoviesComponent implements OnInit {

  constructor(private rest: RestService) { }

  movieList: Movie[];

  ngOnInit() {
    this.rest.getAllMovies().subscribe(v=> this.movieList = v);
  }

}
