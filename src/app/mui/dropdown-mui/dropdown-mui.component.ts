import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-mui',
  templateUrl: './dropdown-mui.component.html',
  styleUrls: ['./dropdown-mui.component.css']
})
export class DropdownMuiComponent {
  @Input() options: DropdownOption[] = [];
  selectedValue: any;

  onSelectionChange(event: any): void {
    console.log(this.selectedValue);
    this.selectedValue = event.value;
  }
  getLabel(value: any): string {
    const option = this.options.find(opt => opt.value === value);
    return option ? option.label : '';
  }
}
interface DropdownOption {
  label: string;
  value: any;
}

