import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPngComponent } from './chart-png.component';

describe('ChartPngComponent', () => {
  let component: ChartPngComponent;
  let fixture: ComponentFixture<ChartPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartPngComponent]
    });
    fixture = TestBed.createComponent(ChartPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
