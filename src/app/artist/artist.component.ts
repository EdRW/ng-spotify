import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  id: string;

  constructor(private spotify: SpotifyService,
              private location: Location,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
        .params
        .subscribe(params => {this.id = params['id']; });
  }

  ngOnInit() {
    this.spotify
        .getArtist(this.id)
        .subscribe(artist => this.renderTrack(artist));
  }

  renderTrack(artist: any) {
    this.artist = artist;
  }

  back() {
    this.location.back();
  }
}
