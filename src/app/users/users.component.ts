import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../services/users-data/users';
import { UsersService } from '../services/users-data/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList$: Observable<Users[]>;
  fullUsersList$: Observable<Users[]>;
  inputSearch: string;

  constructor(private users: UsersService, private activatedRout: ActivatedRoute) { }

  ngOnInit() {
    this.usersList$ = this.users.getAllUsers();
    this.fullUsersList$ = this.users.getAllUsers();
    this.inputSearch = this.activatedRout.snapshot.queryParamMap.get('searchText');
    // queryParamMap:
    // تُعيد فقط الكويري بارامتر
  }

}
