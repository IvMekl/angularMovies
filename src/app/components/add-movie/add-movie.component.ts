import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private rest: RestService) { }


  addMovie(title: string, releaseYear: number) {
    const movie = new Movie(title, releaseYear);
    this.rest.postMovie(movie).subscribe();
  }
  
  ngOnInit() {
  }

}
