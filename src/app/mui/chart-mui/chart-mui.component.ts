import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-chart-mui',
  templateUrl: './chart-mui.component.html',
  styleUrls: ['./chart-mui.component.css']
})
export class ChartMuiComponent implements AfterViewInit {
  @Input() chartType: keyof ChartTypeRegistry = 'bar';
  @Input() chartData: any[] = [];


  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  private chart!: Chart;

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: this.chartType,
      data: {
        labels: this.chartData.map(item => item.label),
        datasets: [
          {
            label: 'Data',
            data: this.chartData.map(item => item.value),
            backgroundColor: this.getBackgroundColor(),
            borderColor: this.getBorderColor(),
            borderWidth: 1
          }
        ]
      }
    });
  }

  private getBackgroundColor(): string[] {
    if (this.chartType === 'bar') {
      return ['rgba(75,192,192,0.4)'];
    } else if (this.chartType === 'line') {
      return [''];
    } else if (this.chartType === 'pie') {
      return ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'];
    } else if (this.chartType === 'doughnut') {
      return ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'];
    }
    return [];
  }

  private getBorderColor(): string[] {
    if (this.chartType === 'bar') {
      return ['rgba(75,192,192,1)'];
    } else if (this.chartType === 'line') {
      return ['rgba(75,192,192,1)'];
    } else if (this.chartType === 'pie') {
      return ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'];
    } else if (this.chartType === 'doughnut') {
      return ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'];
    }
    return [];
  }
}