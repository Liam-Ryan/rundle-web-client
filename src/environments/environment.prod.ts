export const environment = {
  name: 'prod',
  production: true,
  serverBaseUrl: 'https://rundle.eu-west-1.elasticbeanstalk.com',
  clientBaseUrl: 'https://d2ff7elxfbni9c.cloudfront.net',
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
