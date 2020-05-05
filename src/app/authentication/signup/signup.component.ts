import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users-data/users.service';
import { ConfirmMsgService } from '../../services/confirm-msg.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('form', { static: false }) form: NgForm;
  private isSaved = false;
  constructor(
    private usersService: UsersService,
    private confirmMsgService: ConfirmMsgService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isSaved = true;
    this.usersService.addNewUser(this.form.value);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.form.dirty && this.isSaved === false) {
      return this.confirmMsgService.confirm('لم يتم حفظ البيانات، هل تُريد التأكيد على الانتقال؟');
    }
    return true;
  }

}
