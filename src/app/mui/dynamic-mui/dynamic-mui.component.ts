import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-mui',
  templateUrl: './dynamic-mui.component.html',
  styleUrls: ['./dynamic-mui.component.css']
})
export class DynamicMuiComponent {
  barChartData: any[] = [
    { label: 'Label 1', value: 10 },
    { label: 'Label 2', value: 20 },
    { label: 'Label 3', value: 15 },
    // ... add more data for bar chart
  ];

  lineChartData: any[] = [
    { label: 'Label 1', value: 30 },
    { label: 'Label 2', value: 25 },
    { label: 'Label 3', value: 40 },
    // ... add more data for line chart
  ];
  pieChartData: any[] = [
    { label: 'Label 1', value: 30 },
    { label: 'Label 2', value: 25 },
    { label: 'Label 3', value: 40 },
    // ... add more data for pie chart
  ];

  doughnutChartData: any[] = [
    { label: 'Label 1', value: 15 },
    { label: 'Label 2', value: 25 },
    { label: 'Label 3', value: 10 },
    // ... add more data for doughnut chart
  ];
}
