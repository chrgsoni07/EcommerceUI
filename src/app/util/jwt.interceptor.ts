import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cookie} from './cookie';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!request.headers.has('Authorization')) {
      const authToken = Cookie.get('AuthToken');
      if (authToken) {
        request = request.clone({
          withCredentials: true,
          setHeaders: {
            Authorization: `Bearer ${authToken}`,
          }
        });
      }
    }

    return next.handle(request);
  }
}
