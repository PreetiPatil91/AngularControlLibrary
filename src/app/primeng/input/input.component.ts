import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label: string = 'Input Label';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'Enter value';
  @Input() pattern: string = '';
  @Input() errorMessage: string = 'Invalid input';
  
  value: string = '';
  isInvalid: boolean = false;

  validateInput(): void {
    if (this.type === 'name') {
      this.isInvalid = this.value.trim() === '';
    } else {
      const regex = new RegExp(this.pattern);
      this.isInvalid = !regex.test(this.value);
    }
  }
}
