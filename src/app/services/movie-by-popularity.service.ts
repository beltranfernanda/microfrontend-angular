import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { MovieServiceConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class MovieByPopularityService {

  URL = `${MovieServiceConstants.BASE_URL}${MovieServiceConstants.MOVIES}?api_key=${MovieServiceConstants.API_KEY}&sort_by=${MovieServiceConstants.BY_POPULARITY}`;
  constructor(private http:HttpClient) { }

  getMovieByPopularity(){
    return this.http.get<any>(this.URL).pipe(
      map( response => {
        return response.results.map( movie => {
          return {
            title: movie.original_title,
            releaseDate: movie.release_date,
            posterPath: `${MovieServiceConstants.IMAGES_BASE_URL}${movie.poster_path}`
          }
        })
      })
    )
  }
}
