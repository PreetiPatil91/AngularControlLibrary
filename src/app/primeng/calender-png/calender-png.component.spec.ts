import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderPngComponent } from './calender-png.component';

describe('CalenderPngComponent', () => {
  let component: CalenderPngComponent;
  let fixture: ComponentFixture<CalenderPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderPngComponent]
    });
    fixture = TestBed.createComponent(CalenderPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
