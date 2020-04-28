import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API} from '../util/constants';
import {UserSignIn} from '../models/user/UserSignIn';
import {LoginUserInfo} from '../models/user/LoginUserInfo';
import {UserSignUp} from '../models/user/UserSignUp';
import {Cookie} from '../util/cookie';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(userSignIn: UserSignIn) {

    return this.http.post<any>(API.AUTH.login, userSignIn, {observe: 'response', withCredentials: true})
    .pipe(map(authResponse => {

      return this.parseAuthResponse(authResponse);
    }));
  }

  private parseAuthResponse(authResponse) {
    const currentUserInfo = new LoginUserInfo();
    const authorizationHeaderValue = authResponse.headers.get('Authorization');
    
    Cookie.set('AuthToken', authorizationHeaderValue, 1, '/');
    currentUserInfo.firstName = authResponse.body.firstName;
    currentUserInfo.lastName = authResponse.body.lastName;
    currentUserInfo.userRoleType = authResponse.body.userRoleType;
    currentUserInfo.email = authResponse.body.email;

    if (authResponse) {

      localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));
    }

    return authResponse;
  }

  signUp(user: UserSignUp) {

    return this.http.post(API.AUTH.signUp, user);
  }

  isLoggedIn() {

    return Cookie.check('AuthToken');
  }

  logout() {

    const authToken = Cookie.get('AuthToken');
    const refreshToken = Cookie.get('RefreshToken');

    Cookie.delete('AuthToken');
    Cookie.delete('RefreshToken');
    localStorage.removeItem('currentUser');

    return this.http.post(API.AUTH.logout, JSON.stringify({
      token: authToken,
      refreshToken: refreshToken
    }));
  }

  authenticateGuest(email: string, guestUserToken: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', email).append('guestUserToken', guestUserToken);

    return this.http.get(API.AUTH.guestAuthentication, {params: params, observe: 'response', withCredentials: true});
  }

  sendConfirmationLink(email: string): Observable<any> {

    return this.http.get(API.AUTH.confirmEmail, {
      params: new HttpParams().set('email', email)
    });
  }
}
