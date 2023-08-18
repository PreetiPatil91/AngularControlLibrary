import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextInputComponent } from './dynamic-text-input.component';

describe('DynamicTextInputComponent', () => {
  let component: DynamicTextInputComponent;
  let fixture: ComponentFixture<DynamicTextInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicTextInputComponent]
    });
    fixture = TestBed.createComponent(DynamicTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
