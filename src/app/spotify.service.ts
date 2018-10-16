import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( public http: HttpClient) {}

  searchTrack (query: String) {
    const params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');

    const httpOptions = {
      headers : new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer BQB3o0e45P4NB8sstkmPGpYNtzkvh6BCIcLvDFJi6kiRdVD36D1Bdx\
        RdPQnU0qPkW5MtsJqMB9T83YWMMg_lRPAViUs1MmR72Y5QyTWluwlHaV04N5UUj-NyQoNK2toyiaL1Tq7UqgwC'
      })
    };

    const queryUrl = `https://api.spotify.com/v1/search?${params}`;
    // the example code below from book doesn't work
    // return this.http.request(queryUrl).map(res => res.json());
    return this.http.get(queryUrl, httpOptions);
  }
}
