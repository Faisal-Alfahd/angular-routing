import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveUserDetailsService } from 'src/app/guards/resolve-user-details.service';
import { UserDetailsComponent } from './user-details.component';


const routes: Routes = [
  {
    path: '',
    resolve: {
      userDetails: ResolveUserDetailsService
    },
    component: UserDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserDetailsRoutingModule { }
