import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private BASE_URL = 'https://api.spotify.com/v1';
  // tslint:disable-next-line:max-line-length
  private apiKey = 'BQAB0TeIirPonuVGfzKc-qiGA8Bbb5-jsPp0LAkwHazWjIfmGNav4xPkSqa76vylq7tq6hpOS4eopAOiLO0LjJ8vCWptYxPxDsrPCBvykS2EgBvgMuXYAZ1LT9VRXVmhg5Hyg0cLC-Sy';

  constructor( public http: HttpClient) {}

  searchTrack (query: string) {
    return this.search(query, 'track');
  }

  getTrack (id: string) {
    return this.query(`/tracks/${id}`);
  }

  query (
    URL: string,
    params?: Array<string>
  ): Observable<any> {
    let queryUrl = `${this.BASE_URL}${URL}`;
    if (params) {
      queryUrl = `${queryUrl}?${params.join('&')}`;
    }
    const httpOptions = {
      headers : new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      })
    };
    return this.http.get(queryUrl, httpOptions);
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }
}
