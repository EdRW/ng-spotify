import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any;
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
        .getAlbum(this.id)
        .subscribe(album => this.renderAlbum(album));
  }

  renderAlbum(album: any) {
    this.album = album;
  }

  back() {
    this.location.back();
  }

}
