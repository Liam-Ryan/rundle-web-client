/*
 * Copyright (c) 2018 Liam Ryan
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private tokenKeys = {
    ACCESS: 'access_token',
    ID: 'id_token',
    EXPIRES: 'expires_at'
  };

  private defaultLoginRoute = '/post/view';

  auth0;

  constructor(public router: Router) {
    this.auth0 = new auth0.WebAuth(environment.auth0);
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      const route = this.defaultLoginRoute;

      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate([route]);
      } else if (err) {
        this.router.navigate([route]);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
    localStorage.setItem(this.tokenKeys.ACCESS, authResult.accessToken);
    localStorage.setItem(this.tokenKeys.ID, authResult.idToken);
    localStorage.setItem(this.tokenKeys.EXPIRES, expiresAt);
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.errordescription})`);
      }
    });
  }

  public clearTokens(): void {
    Object.values(this.tokenKeys).forEach(
      (token) => localStorage.removeItem(token)
    );
  }

  public logout(): void {
    localStorage.removeItem(this.tokenKeys.ACCESS);
    localStorage.removeItem(this.tokenKeys.ID);
    localStorage.removeItem(this.tokenKeys.EXPIRES);
    // Go back to the create-post route
    this.auth0.logout({
      returnTo: `${environment.clientBaseUrl}`
    });
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem(this.tokenKeys.EXPIRES));
    return Date.now() < expiresAt;
  }

  public createAuth

}
