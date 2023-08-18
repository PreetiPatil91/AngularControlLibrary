import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService],
})
export class FormComponent {
  textInputValue!: string;
  numberInputValue!: number;
  emailInputValue!: string;
  phoneInputValue!: string;

  emailPattern: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  phonePattern: string = "^[0-9]{3}-[0-9]{3}-[0-9]{4}$/";
  
}
