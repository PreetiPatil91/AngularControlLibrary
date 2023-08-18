import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-grid-mui',
  templateUrl: './dynamic-grid-mui.component.html',
  styleUrls: ['./dynamic-grid-mui.component.css']
})
export class DynamicGridMuiComponent {
  @Input() tableData: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() statusOptions: string[] = []; // New input for status options
}
