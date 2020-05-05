import { NgModule } from '@angular/core';

import { MsgRoutingModule } from './msg-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MsgRoutingModule.components],
  imports: [
    SharedModule,
    MsgRoutingModule
  ],
  exports: [MsgRoutingModule.components]
})
export class MsgModule { }
