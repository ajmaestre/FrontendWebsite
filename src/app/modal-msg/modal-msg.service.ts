import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMsgService {

  showModal: boolean = false;
  loading: boolean = false;
  message: string = '';

  constructor() { }

}
