import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-chart-png',
  templateUrl: './chart-png.component.html',
  styleUrls: ['./chart-png.component.css'],
  providers: [MessageService],
})
export class ChartPngComponent {
  barChartData: any;
  barChartOptions: any;

  pieChartData: any;
  pieChartOptions: any;

  doughnutChartData: any;
  doughnutChartOptions: any;

  constructor() {
    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Bar Chart Data',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#42A5F5',
        },
      ],
    };
    this.barChartOptions = {
      responsive: true,
    };

    this.pieChartData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    this.pieChartOptions = {
      responsive: true,
    };

    this.doughnutChartData = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    this.doughnutChartOptions = {
      responsive: true,
    };
  }
}
