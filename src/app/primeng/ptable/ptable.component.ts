import { Component, OnInit } from '@angular/core';
import { TableData } from '../../primeng/table-data.model';
export interface RowData {
  [key: string]: any;
}
@Component({
  selector: 'app-ptable',
  templateUrl: './ptable.component.html',
  styleUrls: ['./ptable.component.css']
})
export class PtableComponent {
  items: TableData[] = [];
  columns: { header: string; field: string }[] = [];

  constructor() {}

  ngOnInit() {
    // Simulated data - Replace this with your actual data source
    this.items = [
      { column1: 'Value 1A', column2: 'Value 2A' },
      { column1: 'Value 1B', column2: 'Value 2B' },
      // Add more data as needed
    ];

    // Column configuration
    this.columns = [
      { header: 'Column 1', field: 'column1' },
      { header: 'Column 2', field: 'column2' },
      { header: 'Column 3', field: 'column3' },
      { header: 'Column 4', field: 'column4' },
      // Add more columns as needed
    ];
  }
}
