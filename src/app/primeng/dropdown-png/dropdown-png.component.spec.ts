import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPngComponent } from './dropdown-png.component';

describe('DropdownPngComponent', () => {
  let component: DropdownPngComponent;
  let fixture: ComponentFixture<DropdownPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownPngComponent]
    });
    fixture = TestBed.createComponent(DropdownPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
