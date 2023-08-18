import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calender-png',
  templateUrl: './calender-png.component.html',
  styleUrls: ['./calender-png.component.css']
})
export class CalenderPngComponent {
  @Input()
  selectedDate!: Date;
  @Output() selectedDateChange: EventEmitter<Date> = new EventEmitter<Date>();

  onDateChange(newDate: Date) {
    this.selectedDate = newDate;
    this.selectedDateChange.emit(newDate);
  }
}
