import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { UsersResolved } from '../services/users-data/users';
import { UsersService } from "../services/users-data/users.service";

@Injectable({
  providedIn: 'root'
})
export class ResolveUserDetailsService implements Resolve<UsersResolved> {

  constructor(private usersService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersResolved> {
    const id = +route.paramMap.get('id');
    // if (isNaN(+id)) {
    //   const msg = 'user id not a number:' + id;
    //   return of({users: null, error: msg});
    // }
    return this.usersService.getUserById(id).pipe(
      delay(2000),
      map(user => ({ users: user })),
      catchError(error => {
        const msg = 'Retrieval error: ' + error;
        console.log(error);
        return of({ users: null, error: msg });
      })
    );
  }
}
