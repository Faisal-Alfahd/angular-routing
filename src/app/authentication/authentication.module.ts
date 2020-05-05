import { NgModule } from '@angular/core';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthenticationRoutingModule.components
  ],
  imports: [
    SharedModule,
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule { }
