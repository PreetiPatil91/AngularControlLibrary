import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-png',
  templateUrl: './dropdown-png.component.html',
  styleUrls: ['./dropdown-png.component.css']
})
export class DropdownPngComponent {
  @Input() options: any[] = [];
  @Output() valueChange = new EventEmitter<any>();

  selectedValue: any = null;

  onValueChange() {
    this.valueChange.emit(this.selectedValue);
    console.log('Selected Value:', this.selectedValue);
  }
}
