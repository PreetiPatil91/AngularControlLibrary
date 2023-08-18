import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  dynamicFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      validationPattern: /^[a-zA-Z\s]*$/, // Only alphabets and spaces allowed
      errorMessage: 'Name is required and should contain only alphabets and spaces.'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      validationPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Valid email pattern
      errorMessage: 'Invalid email format.'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      validationPattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // At least 8 characters, one letter, and one number
      errorMessage: 'Password should be at least 8 characters and contain at least one letter and one number.'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Enter your phone number',
      validationPattern: /^\d{10}$/, // 10-digit mobile number
      errorMessage: 'Invalid phone number format. Please enter a 10-digit number.'
    }
 
];
}
