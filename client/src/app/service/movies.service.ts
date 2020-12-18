import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apikey = '38e73fff75a56ceab612b735990996a2';
  private urlMoviedb = 'https://api.themoviedb.org/3/';

  movies: any[] = [];

  constructor(private http: HttpClient) { }

  getMostPopular() {
    return this.http.get (`${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`);
  }

  getTheatresMovies() {

    const since = new Date();
    const until = new Date();
    until.setDate(until.getDate() + 7);

    const sinceStr = `${since.getFullYear()}-0${since.getMonth() - 1}-${since.getDate()}`;
    const untilStr = `${until.getFullYear()}-0${until.getMonth() }-${until.getDate()}`;

    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.urlMoviedb}discover/movie?primary_release_date.gte=${sinceStr}&primary_release_date.lte=${untilStr}&api_key=${this.apikey}`);
  }
  getDramaMovies() {
    // tslint:disable-next-line:max-line-length
    return this.http.get (`${ this.urlMoviedb }discover/movie?with_genres=18&primary_release_year=2019&api_key=${ this.apikey }`);

  }

  searchMovie( term: string) {
    return this.http.get (`${ this.urlMoviedb }search/movie?query=${ term }&sort_by=popularity.desc&api_key=${ this.apikey }`);
  }

  getMovie(id: string) {

    return this.http.get (`${ this.urlMoviedb }movie/${id}?&api_key=${ this.apikey }`);

  }


}
