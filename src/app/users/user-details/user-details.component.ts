import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users-data/users.service';
import { Subscription } from 'rxjs';
import { UsersResolved } from 'src/app/services/users-data/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy, AfterViewChecked {
  user: UsersResolved;
  errorMsg: string;
  private subscription: Subscription;
  private id: number;
  private usersSum: number;

  constructor(
    private activeRouter: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.usersService.getAllUsers().subscribe(data => {
      this.usersSum = data.length;
    });
  }

  ngOnInit() {
    this.subscription = this.activeRouter.data.subscribe(data => {
      this.user = data.userDetails;
      this.id = +this.user.users.userId;
      this.errorMsg = this.user.error;
    });
  }

  ngAfterViewChecked() {
    const fragmentParam = this.activeRouter.snapshot.fragment;
    if (fragmentParam) {
      const elementId = document.getElementById(fragmentParam);
      elementId.scrollIntoView();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  viewNextUser() {
    this.id === this.usersSum ? this.id = 1 : this.id += 1;
    this.router.navigate(['users/user-details', this.id], {
      queryParamsHandling: 'preserve'
    });
  }

}
