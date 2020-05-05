import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users-data/users.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  IsSignedIn = false;
  IsAdmin = false;
  id: string;

  constructor(
    private userService: UsersService,
    private storageMap: StorageMap,
  ) { }

  ngOnInit(): void {
    this.userService.isAdmin$.subscribe(val => {
      this.IsAdmin = val;
    });
    this.userService.isLogIn$.subscribe(val => {
      this.IsSignedIn = val;
    });
    this.storageMap.watch('id').subscribe((id: string) => {
      this.id = id;
    });
  }

}
