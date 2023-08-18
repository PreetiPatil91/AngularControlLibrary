import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCalenderPngComponent } from './dynamic-calender-png.component';

describe('DynamicCalenderPngComponent', () => {
  let component: DynamicCalenderPngComponent;
  let fixture: ComponentFixture<DynamicCalenderPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicCalenderPngComponent]
    });
    fixture = TestBed.createComponent(DynamicCalenderPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
