import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  track: any;
  id: string;

  constructor(private spotify: SpotifyService,
              private location: Location,
              private route: ActivatedRoute) {
  this.route
      .params
      .subscribe(params => {this.id = params['id']; });
  }

  ngOnInit() {
    this.spotify
        .getTrack(this.id)
        .subscribe(track => this.renderTrack(track));
  }

  renderTrack(track: any) {
    this.track = track;
  }

  back() {
    this.location.back();
  }
}
