import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfirmMsgService {

  constructor() { }

  confirm(msg?: string) {
    return window.confirm(msg);
  }
}
