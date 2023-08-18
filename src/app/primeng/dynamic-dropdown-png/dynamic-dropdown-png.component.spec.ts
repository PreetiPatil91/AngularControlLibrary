import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropdownPngComponent } from './dynamic-dropdown-png.component';

describe('DynamicDropdownPngComponent', () => {
  let component: DynamicDropdownPngComponent;
  let fixture: ComponentFixture<DynamicDropdownPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDropdownPngComponent]
    });
    fixture = TestBed.createComponent(DynamicDropdownPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
