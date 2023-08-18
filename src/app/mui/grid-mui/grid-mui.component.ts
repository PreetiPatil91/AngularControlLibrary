import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-mui',
  templateUrl: './grid-mui.component.html',
  styleUrls: ['./grid-mui.component.css']
})
export class GridMuiComponent {
  tableData = [
    { name: 'Alice', age: 25, email: 'alice@example.com', status: 'Active' },
    { name: 'Bob', age: 30, email: 'bob@example.com', status: 'Inactive' },
    // ... more data
  ];
  displayedColumns: string[] = ['name', 'age', 'email', 'status']; // Add 'status' column
  statusOptions: string[] = ['Active', 'Inactive', 'Pending']; // Options for status dropdown
}
