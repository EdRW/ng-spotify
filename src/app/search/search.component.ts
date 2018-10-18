import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: any[];

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
        .queryParams
        .subscribe(params => {
          console.log('Qparams: ' + params['query']);
          this.query = params['query'] || ''; });
    this.route
        .fragment
        .subscribe(token => {
          if (token) {
            console.log('token: ' + token);
            this.spotify.setToken(token.split('access_token=')[1].split('&')[0]);
          }
        });
}

  ngOnInit() {
    this.search();
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    this.spotify
      .searchTrack(this.query)
      .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results =  res.tracks.items;
    }
  }

   submit(query: string): void {
    this.router.navigate(['search'], {queryParams: {query: query}})
      .then(_ => this.search());
  }

}
