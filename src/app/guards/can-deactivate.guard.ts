import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from '../authentication/login/login.component';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.canDeactivate) {
        return component.canDeactivate();
      }
      return true;
  }
}


@Injectable({
  providedIn: 'root'
})

export class CanDeactivateLoginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if (component.form.dirty === true && component.isSaved === false) {
         return confirm('متأكد من الرغبة في الانتقال قبل تسجيل الدخول؟');
       }
       return true;
  }
}
