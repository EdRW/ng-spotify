import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-spotify';
  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    // this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logoff() {
      this.oauthService.logOut();
  }

  public get loggedIn() {
/*       const token = this.oauthService.getAccessToken();
      console.log('token: ' + token);
      if (!token) { return false; } */
      return true;
  }
}
