import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users-data/users.service';

@Component({
  selector: 'app-singout',
  templateUrl: './singout.component.html',
  styleUrls: ['./singout.component.scss']
})
export class SingoutComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.logoutUser();
    // setTimeout(() => {
    //
    // }, 1000);
  }

}
