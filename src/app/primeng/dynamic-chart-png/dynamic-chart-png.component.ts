import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-chart-png',
  templateUrl: './dynamic-chart-png.component.html',
  styleUrls: ['./dynamic-chart-png.component.css']
})
export class DynamicChartPngComponent {
  @Input()
  chartType!: string;
  @Input() data: any;
  @Input() options: any;
}
