import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMsgComponent } from './modal-msg.component';
import { ModalMsgService } from './modal-msg.service';



@NgModule({
  declarations: [ModalMsgComponent],
  imports: [
    CommonModule
  ],
  providers: [ModalMsgService]
})
export class ModalMsgModule { }
