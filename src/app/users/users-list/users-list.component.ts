import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from 'src/app/services/users-data/users';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnChanges {

  @Input() users$: Observable<Users[]>;
  @Input() fullUsersList$: Observable<Users[]>;
  @Input() inputSearch: string;
  selectedUser: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedUser = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ngOnChanges() {
    if (this.inputSearch) {
      this.users$.subscribe(data => {
        const result = data.filter(user =>
          user.name.toLocaleLowerCase().indexOf(this.inputSearch.toLocaleLowerCase()) !== -1);
        this.users$ = of(result);
      });
    } else {
      this.users$ = this.fullUsersList$;
    }
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        // نقوم بكتابة مانريده من أكواد هنا
        // console.log(event);
      }
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['./user-details', id],
      {
        relativeTo: this.activatedRoute,
        skipLocationChange: true,
        queryParams: { searchText: this.inputSearch }
      });
  }
}
