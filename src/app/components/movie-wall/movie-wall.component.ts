import { Component, OnInit } from '@angular/core';

import { MovieByPopularityService } from '../../services/movie-by-popularity.service';
import { Movie } from '../../api/Movie';

@Component({
  selector: 'app-movie-wall',
  templateUrl: './movie-wall.component.html',
  styleUrls: ['./movie-wall.component.css']
})
export class MovieWallComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private MovieService:MovieByPopularityService) { }

  ngOnInit(): void {
    this.MovieService.getMovieByPopularity()
    .subscribe( response => {
      this.movies = response;
    });
  }

}
