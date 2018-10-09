import { Component } from '@angular/core';
import { Auth0LibService } from 'auth0-lib';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  auth0Config = new auth0.WebAuth({
    clientID: 'lr6sUDE96PD7u0Yw9gRVacWvjHHijseT',
    domain: 'careportfolio.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid'
  });

  constructor(private auth: Auth0LibService) {
    auth.init(this.auth0Config);

    auth.handleAuthentication();
  }

  public login(): void {
    this.auth.login();
  }

  public logout(): void {
    this.auth.logout();
  }

  get authenticated(): boolean {
    return this.auth.isAuthenticated();
  }
}
