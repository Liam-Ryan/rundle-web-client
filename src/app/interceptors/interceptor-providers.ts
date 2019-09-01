import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor';

// best practice is to export all interceptors from one file in an array - https://angular.io/guide/http#intercepting-requests-and-responses
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
];
