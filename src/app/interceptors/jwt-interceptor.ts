import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// @todo deal with http errors in a separate interceptor

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(environment.serverBaseUrl)) {
      const jwt = `Bearer ${localStorage.getItem('access_token')}`;
      return next.handle(req.clone({headers: req.headers.set('Authorization', jwt)}));
    }

    return next.handle(req);
  }
}
