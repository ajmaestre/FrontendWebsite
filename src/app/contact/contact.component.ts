import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs';
import { IEmail } from '../interfaces/IEmail';
import { ModalMsgService } from '../modal-msg/modal-msg.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {


  data: FormGroup;
  emailSubscription!: Subscription;
  email_body!: IEmail;
  form_fill: boolean = false;

  constructor(private contactService: ContactService, public modalService: ModalMsgService) { 
    this.data = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

  }

  sendEmail(){

    if(this.validateForm()){
      
      this.form_fill = false;

      this.modalService.loading = true;
      this.modalService.message = 'Enviando mensaje...';
      this.modalService.showModal = true;
      
      this.email_body = this.data.value;
      this.emailSubscription = this.contactService.sendMail(this.email_body).subscribe({
        next: (res) =>{
  
          this.modalService.showModal = false;
  
          this.modalService.loading = false;
          this.modalService.message = 'Mensaje enviado';
          this.modalService.showModal = true;
  
          this.clearForm();
        },
        error: (err) => {
          console.log(err);
        }
      }); 
    }else{
      this.form_fill = true;
    }

  }

  validateForm(): boolean{
    if(this.data.value.email == '' || this.data.value.subject == '' || this.data.value.message == ''){
      return false;
    }else{
      return true;
    }
  }

  clearForm(){
    this.data.setValue({
      email: '',
      subject: '',
      message: ''
    });
  }

  ngOnDestroy(): void {
    this.emailSubscription.unsubscribe();
  }

}
