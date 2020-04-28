import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.authenticationService.isLoggedIn()) {

      this.router.navigate(['/sign-in'], {queryParams: {returnUrl: state.url}});

      return false;
    }

    return true;
  }
}
