import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  oidc: false,
  // Url of the Identity Provider
  // issuer: 'https://',
  loginUrl: 'https://accounts.spotify.com/authorize',
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin, // + '/index.html',
  // redirectUri: 'localhost:4200',
  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '1a10df0be2b94541b4e8b9a9b93a7f56',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'user-read-private',

  // requireHttps: false
};
