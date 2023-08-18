import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-dropdown-png',
  templateUrl: './dynamic-dropdown-png.component.html',
  styleUrls: ['./dynamic-dropdown-png.component.css']
})
export class DynamicDropdownPngComponent {
  dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  
  onDropdownValueChange(value: any) {
    console.log('Value changed in parent:', value);
  }
}
