import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../services/users-data/users.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private userService: UsersService,
  ) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.isLogIn$.pipe(
      map((isLogIn: boolean) => {
        if (isLogIn) { return isLogIn; }
        return this.router.createUrlTree(['auth/login'], { queryParams: { redirectUrl: state.url } });
      })
    );
  }
}


@Injectable({
  providedIn: 'root'
})
export class CanActivateAdminChildGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private userService: UsersService,
  ) { }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.isAdmin$.pipe(
      map((isAdmin: boolean) => {
        if (isAdmin) { return isAdmin; }
        return this.router.parseUrl('home');
      })
    );
  }
}
