import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMuiComponent } from './dropdown-mui.component';

describe('DropdownMuiComponent', () => {
  let component: DropdownMuiComponent;
  let fixture: ComponentFixture<DropdownMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownMuiComponent]
    });
    fixture = TestBed.createComponent(DropdownMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
