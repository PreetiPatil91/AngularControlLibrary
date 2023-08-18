import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-d3',
  templateUrl: './bar-d3.component.html',
  styleUrls: ['./bar-d3.component.css'],
})
export class BarD3Component {
  fruitSalesData = [
    { fruit: 'Apple', sales: 120 },
    { fruit: 'Banana', sales: 200 },
    { fruit: 'Orange', sales: 80 },
    { fruit: 'Mango', sales: 220 },
    // Add more data entries here
  ];
}
