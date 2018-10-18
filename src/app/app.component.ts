import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-spotify';
  constructor(private oauthService: OAuthService,
              private spotify: SpotifyService) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public get loggedIn() {
      return this.spotify.loggedin();
  }
}
