import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChartPngComponent } from './dynamic-chart-png.component';

describe('DynamicChartPngComponent', () => {
  let component: DynamicChartPngComponent;
  let fixture: ComponentFixture<DynamicChartPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicChartPngComponent]
    });
    fixture = TestBed.createComponent(DynamicChartPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
