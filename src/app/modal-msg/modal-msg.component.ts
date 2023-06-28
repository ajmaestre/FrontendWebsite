import { Component, OnInit } from '@angular/core';
import { ModalMsgService } from './modal-msg.service';

@Component({
  selector: 'app-modal-msg',
  templateUrl: './modal-msg.component.html',
  styleUrls: ['./modal-msg.component.css']
})
export class ModalMsgComponent implements OnInit {

  constructor(public modalService: ModalMsgService) { }

  ngOnInit(): void {
  }

}
