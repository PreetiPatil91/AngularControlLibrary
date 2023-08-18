import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-calender-png',
  templateUrl: './dynamic-calender-png.component.html',
  styleUrls: ['./dynamic-calender-png.component.css']
})
export class DynamicCalenderPngComponent {
  parentSelectedDate: Date = new Date();

  onCustomCalendarDateChange(newDate: Date) {
    this.parentSelectedDate = newDate;
  }
}
