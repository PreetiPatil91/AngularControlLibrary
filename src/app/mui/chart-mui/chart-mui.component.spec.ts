import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMuiComponent } from './chart-mui.component';

describe('ChartMuiComponent', () => {
  let component: ChartMuiComponent;
  let fixture: ComponentFixture<ChartMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartMuiComponent]
    });
    fixture = TestBed.createComponent(ChartMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
