import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';


@Injectable()
export class SpotifyService {
  token: string;
  private BASE_URL = 'https://api.spotify.com/v1';
  // tslint:disable-next-line:max-line-length
  // 'BQB5wTHyjvP5zZFLbjbL8PyxujB4-CQHB7wC8cRRnBXnSreLycjeSgxjDxR0otQF74X9gTzD4vx1guqmolPbhTCkTuWiTLoTsDzAz8HFgaM3mG0MVUfGbNJ7DGLTCBkzay2oAQzBMDcW';

  constructor(public http: HttpClient) {}

  searchTrack (query: string) {
    return this.search(query, 'track');
  }

  getTrack (id: string) {
    return this.query(`/tracks/${id}`);
  }

  getArtist (id: string) {
    return this.query(`/artists/${id}`);
  }

  getAlbum (id: string) {
    return this.query(`/albums/${id}`);
  }

  setToken(tokenIn: string) {
    console.log(`saving... ${tokenIn}`);
    this.token = tokenIn;
    console.log(`saved as  ${this.token}`);
  }

  loggedin() {
    if (this.token) {return true; }
    return false;
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
        'Authorization': `Bearer ${this.token}`,
      })
    };

    console.log(`sp service token: ${this.token}`);
    return this.http.get(queryUrl, httpOptions);
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`,
      'market=US'
    ]);
  }
}
