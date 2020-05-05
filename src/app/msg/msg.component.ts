import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users-data/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss']
})

export class MsgComponent implements OnInit {
  message: string;
  closed = false;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getMessage();
  }

  close(): void {
    this.closed = true;
    this.message = '';
  }

  open(): void {
    this.getMessage();
    this.closed = false;
    this.router.navigate([{ outlets: { msg: ['messages'] } }]);
  }

  getMessage(): void {
    this.usersService.isLogIn$.subscribe(LogIn => {
      if (LogIn) {
        const user = this.usersService.user;
        const currentDate = new Date();
        const date = currentDate.toDateString();
        const time = currentDate.toLocaleTimeString();
        this.message = `Hi ( ${user.name} ) Logged in at ${date} - ${time}`;
      }
    });
  }
}
