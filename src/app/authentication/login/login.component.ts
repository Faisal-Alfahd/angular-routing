import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users-data/users.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  public isSaved = false;
  private path: string;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storageMap: StorageMap,
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParams.redirectUrl) {
      this.path = this.activatedRoute.snapshot.queryParams.redirectUrl;
    } else {
      this.path = '';
    }
  }

  onSubmit() {
    const value = this.form.controls.userName.value;
    this.userService.logIn(value);
    this.storageMap.get('id').subscribe((id) => {
      if (this.path === '') {
        this.router.navigate(['/home']);
      } else if (this.path === '/users' || this.path === '/home/edit-courses') {
        this.router.navigate([`/${this.path}`]);
      } else {
        const path = this.path.split('/');
        this.router.navigate([`/${path[1]}/${id}`]);
      }
    });
    this.router.navigate([{ outlets: { msg: ['messages'] } }]);
    this.isSaved = true;
  }

}
