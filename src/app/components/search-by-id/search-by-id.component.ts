import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.css']
})
export class SearchByIdComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  searchById(id: number) {
    this.location.replaceState('showMovieDetails/' + id);
    window.location.reload();
  }
}
