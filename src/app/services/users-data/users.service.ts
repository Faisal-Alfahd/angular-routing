import { Injectable } from '@angular/core';
import { Users } from './users';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isAdmin$ = new BehaviorSubject(false);
  public isLogIn$ = new BehaviorSubject(false);
  public user: Users;

  constructor(private router: Router, private storageMap: StorageMap) { }

  USERS: Users[] = [
    {
      userId: 1,
      userType: 'admin',
      name: 'Faisal',
      userCity: 'Riyadh',
      userName: 'DevFaisal',
      password: '1234',
    },
    {
      userId: 2,
      userType: 'no-admin',
      name: 'Saad',
      userCity: 'Riyadh',
      userName: 'DevSaad',
      password: '1111',
    },
    {
      userId: 3,
      userType: 'no-admin',
      name: 'Bader',
      userCity: 'Dammam',
      userName: 'DevBader',
      password: '2222',
    },
    {
      userId: 4,
      userType: 'no-admin',
      name: 'Fahd',
      userCity: 'Jeddah',
      userName: 'DevFahd',
      password: '3333',
    },
  ];
  usersList$ = of(this.USERS);

  getAllUsers(): Observable<Users[]> {
    return this.usersList$;
  }

  getUserById(id: number): Observable<Users> {
    return this.getAllUsers().pipe(
      map(users => users.find(user => {
        return user.userId === id;
      }))
    );
  }

  addNewUser(user: Users) {
    user.userId = this.USERS.length + 1;
    user.userType = 'no-admin';
    this.USERS.push(user);
    this.logIn(user.userName);
    this.router.navigate([{outlets: {primary: ['home'], msg: ['messages']}}]);
    //this.router.navigateByUrl('/home');
  }

  logIn(userName: string) {
    this.getAllUsers()
      .pipe(map(users => users.find(user => user.userName === userName)))
      .subscribe((user) => {
        this.user = user;
        this.isLogIn$.next(true);
        user.userType === 'admin' ? this.isAdmin$.next(true) : this.isAdmin$.next(false);
        this.storageMap.set('id', (user.userId).toString()).subscribe(() => { });
        localStorage.setItem('type', user.userType);
      });
  }

  logoutUser(): void {
    this.isAdmin$.next(false);
    this.isLogIn$.next(false);
    this.storageMap.delete('id').subscribe(() => { });
    localStorage.clear();
    // this.router.navigateByUrl('/home');
    this.router.navigate([{outlets: {primary: ['home'], msg: null}}]);
  }

}
