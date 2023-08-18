import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
interface BarData {
  fruit: string;
  sales: number;
}

@Component({
  selector: 'app-dynamic-bar-d3',
  templateUrl: './dynamic-bar-d3.component.html',
  styleUrls: ['./dynamic-bar-d3.component.css']
})
export class DynamicBarD3Component implements OnInit, OnChanges {
  @Input() data: any[] = [];

  private svg: any;
  private margin = 50;
  private width = 400 - 2 * this.margin;
  private height = 300 - 2 * this.margin;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.createSvg();
    this.drawBars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange) {
      this.updateBars();
    }
  }

  private createSvg(): void {
    this.svg = d3.select(this.elementRef.nativeElement.querySelector('div'))
      .append('svg')
      .attr('width', this.width + 2 * this.margin)
      .attr('height', this.height + 2 * this.margin)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(): void {
    const x = d3.scaleBand()
      .domain(this.data.map(d => d.fruit))
      .range([0, this.width])
      .padding(0.1);
  
    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.sales)])
      .range([this.height, 0]);
  
    // Draw x-axis
    this.svg.append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x));
  
    // Draw y-axis
    this.svg.append('g')
      .call(d3.axisLeft(y));
  
    // Draw bars
    const bars = this.svg.selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d: { fruit: string; }) => x(d.fruit))
      .attr('y', (d: { sales: d3.NumberValue; }) => y(d.sales))
      .attr('width', x.bandwidth())
      .attr('height', (d: { sales: d3.NumberValue; }) => this.height - y(d.sales))
      .attr('fill', '#007BFF');
  
    // Add sales details
    bars.on('mouseover', (event: { currentTarget: any; }, d: { sales: any; }) => {
      d3.select(event.currentTarget).attr('fill', '#FF5733');
      const xPos = +d3.select(event.currentTarget).attr('x') + x.bandwidth() / 2;
      const yPos = +d3.select(event.currentTarget).attr('y') - 10;
      const salesValue = d.sales;
      const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('background-color', 'white')
        .style('border', '1px solid #ddd')
        .style('padding', '10px')
        .style('border-radius', '5px')
        .style('pointer-events', 'none')
        .style('left', xPos + 'px')
        .style('top', yPos + 'px')
        .text(`Sales: ${salesValue}`);
      
      tooltip.on('mouseout', () => {
        d3.select(event.currentTarget).attr('fill', '#007BFF');
        tooltip.remove();
      });
    })
    .on('mouseout', (event: { currentTarget: any; }) => {
      d3.select(event.currentTarget).attr('fill', '#007BFF');
      d3.selectAll('.tooltip').remove();
    });
  }
  
  
  
  private updateBars(): void {
    const y = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d.sales)])
      .range([this.height, 0]);

    this.svg.selectAll('rect')
      .data(this.data)
      .transition()
      .duration(500)
      .attr('y', (d: { sales: d3.NumberValue; }) => y(d.sales))
      .attr('height', (d: { sales: d3.NumberValue; }) => this.height - y(d.sales));
  }
}