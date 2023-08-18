import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiFormComponent } from './mui-form.component';

describe('MuiFormComponent', () => {
  let component: MuiFormComponent;
  let fixture: ComponentFixture<MuiFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuiFormComponent]
    });
    fixture = TestBed.createComponent(MuiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
