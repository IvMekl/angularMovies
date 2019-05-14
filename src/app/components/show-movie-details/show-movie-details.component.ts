import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Movie';
import { RestService } from 'src/app/services/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-movie-details',
  templateUrl: './show-movie-details.component.html',
  styleUrls: ['./show-movie-details.component.css']
})
export class ShowMovieDetailsComponent implements OnInit {
  movie: Movie;
  id: number;
  constructor(private rest: RestService, private route: ActivatedRoute) { 
    route.params.subscribe(
      params => {
        this.id = params['id'];
        if(this.id !== undefined) {
          this.rest.getMovie(this.id).subscribe(v=> this.movie = v);
        }
      } 
    );
  }

  
  ngOnInit() {
    
    console.log(this.movie);
  }

}
