// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'dev',
  production: false,
  serverBaseUrl: 'http://localhost:5000',
  apiEndpoint: '/api/v1/',
  clientBaseUrl: 'http://localhost:4200',
  get auth0() {
    const auth0 = {
      clientID: 'ZYcrG9LmYgSBJs2xhtWk4XY8yr6mJ4am',
      domain: 'rundle.eu.auth0.com',
      responseType: 'token id_token',
      audience: 'http://localhost:8080',
      scope: 'openid view:hidden-post delete:post create:post',
      redirectUri: ''
    };
    auth0.redirectUri = `${this.clientBaseUrl}/callback`;
    return auth0;
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
