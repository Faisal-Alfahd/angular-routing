import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsgComponent } from './msg.component';


const routes: Routes = [
  { path: '', component: MsgComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MsgRoutingModule {
  static components = [MsgComponent];
}
