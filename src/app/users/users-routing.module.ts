import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersComponent } from './users.component';
import { CanActivateGuard, CanActivateAdminGuard } from '../guards/can-activate.guard';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [CanActivateGuard, CanActivateAdminGuard],
    data: { roles: 'admin' },
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'user-list',
        component: UsersListComponent
      },
      {
        path: 'user-details/:id',
        loadChildren: () =>
          import('./user-details/user-details.module').then(m => m.UserDetailsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
  static components = [
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent
  ];
}
