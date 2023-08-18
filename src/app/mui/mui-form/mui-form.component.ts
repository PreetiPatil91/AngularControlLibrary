import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mui-form',
  templateUrl: './mui-form.component.html',
  styleUrls: ['./mui-form.component.css']
})
export class MuiFormComponent implements OnInit {
  @Input()
  fields: any[] = [];
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({});
    this.fields.forEach((field) => {
      const control = this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(field.validationPattern)
      ]);
      this.formGroup.addControl(field.name, control);
    });
  }

  getFormControl(fieldName: string): FormControl {
    return this.formGroup.get(fieldName) as FormControl;
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log('Form submitted!', this.formGroup.value);
    } else {
      console.log('Form is invalid. Please check the errors.');
    }
  }
}