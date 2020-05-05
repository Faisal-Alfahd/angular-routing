import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users-data/users.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.isLogIn$.pipe(
      map((isLogIn: boolean) => {
        console.log(isLogIn);
        if (isLogIn) { return true; }
        this.router.navigate(['auth/login']);
        return false;
      })
    );
  }
}
