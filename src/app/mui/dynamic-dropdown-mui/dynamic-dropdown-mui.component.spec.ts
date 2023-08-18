import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDropdownMuiComponent } from './dynamic-dropdown-mui.component';

describe('DynamicDropdownMuiComponent', () => {
  let component: DynamicDropdownMuiComponent;
  let fixture: ComponentFixture<DynamicDropdownMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDropdownMuiComponent]
    });
    fixture = TestBed.createComponent(DynamicDropdownMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
