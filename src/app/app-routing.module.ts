import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { EditCoursesComponent } from './home/edite-courses/edit-courses.component';
import {
  CanActivateAdminChildGuard,
  CanActivateChildGuard
} from './guards/can-activate-child.guard';
import { ResolveCoursesService } from './guards/resolve-courses.service';
import { CanLoadGuard } from './guards/can-load.guard';
import { CustomPreloadingService } from './services/custom-preloading.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: { courses: ResolveCoursesService },
    canActivateChild: [CanActivateChildGuard, CanActivateAdminChildGuard],
    children: [
      { path: 'edit-courses', component: EditCoursesComponent }
    ]
  },
  {
    path: 'messages',
    outlet: 'msg',
    loadChildren: () =>
      import('./msg/msg.module').then(module => module.MsgModule)
  },
  {
    path: 'profile/:id',
    canLoad: [CanLoadGuard],
    loadChildren: () =>
      import('./profile/profile.module').then(module => module.ProfileModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module')
        .then(module => module.AuthenticationModule)
  },
  {
    path: 'users',
    data: { preload: true },
    loadChildren: () =>
      import('./users/users.module').then(module => module.UsersModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
