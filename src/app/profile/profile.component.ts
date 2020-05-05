import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../services/users-data/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from '../services/users-data/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user$: Users;
  private subscription: Subscription;
  private id: number;

  constructor(
    private activeRouter: ActivatedRoute,
    private usersSrevice: UsersService
  ) { }

  ngOnInit(): void {
    this.id = +this.activeRouter.snapshot.params.id;
    this.subscription = this.usersSrevice.getUserById(this.id).subscribe(user => {
      this.user$ = user;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
