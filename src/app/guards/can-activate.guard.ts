import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users-data/users.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CanActivateGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UsersService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean |
      UrlTree> |
    Promise<boolean |
      UrlTree> |
    boolean |
    UrlTree {
    // const isLogIn = this.userService.isLogIn$.value;
    // if (isLogIn) { return true; }
    // this.router.navigate(['auth/login']);
    // return false;
    return this.userService.isLogIn$.pipe(
      map((isLogIn: boolean) => {
        if (isLogIn) { return true; }
        // return this.router.parseUrl('auth/login');
        return this.router.createUrlTree(['auth/login'], { queryParams: { redirectUrl: state.url } });
      })
    );
  }
}


@Injectable({
  providedIn: 'root'
})

export class CanActivateAdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean |
      UrlTree> |
    Promise<boolean |
      UrlTree> |
    boolean |
    UrlTree {
    const roles: string = next.data.roles;
    const admin = localStorage.getItem('type');
    if (roles === admin) {
      return true;
    }
    return this.router.parseUrl('home');
  }


}
