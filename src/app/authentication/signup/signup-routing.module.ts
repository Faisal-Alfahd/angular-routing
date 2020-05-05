import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';
import { SignupComponent } from './signup.component';


const routes: Routes = [
  {
    path: '',
    canDeactivate: [CanDeactivateGuard],
    component: SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
