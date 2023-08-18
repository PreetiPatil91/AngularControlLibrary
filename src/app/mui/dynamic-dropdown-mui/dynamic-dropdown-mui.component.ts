import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-dropdown-mui',
  templateUrl: './dynamic-dropdown-mui.component.html',
  styleUrls: ['./dynamic-dropdown-mui.component.css']
})
export class DynamicDropdownMuiComponent {
  dropdownOptions: DropdownOption[] = [
    { label: 'Apple', value: 1 },
    { label: 'Orange', value: 2 },
    { label: 'Pear', value: 3 },
  ];
}
interface DropdownOption {
  label: string;
  value: any;
}