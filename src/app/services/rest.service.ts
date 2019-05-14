import { Injectable } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Observable } from 'rxjs';
import { Movie } from '../Movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:3000/movies'

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.URL);
  }

  postMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.URL, movie);
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.URL+'/'+id);
  }

}
