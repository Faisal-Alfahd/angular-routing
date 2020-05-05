import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateLoginGuard } from 'src/app/guards/can-deactivate.guard';
import { LoginComponent } from './login.component';


const routes: Routes = [
  {
    path: '',
    canDeactivate: [CanDeactivateLoginGuard],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
