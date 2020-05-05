import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingoutComponent } from './singout/singout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthenticationComponent
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
      },
      {
        path: 'signout',
        component: SingoutComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {
  static components = [
    SingoutComponent,
    LoginComponent,
    SignupComponent,
    AuthenticationComponent
  ];
}
