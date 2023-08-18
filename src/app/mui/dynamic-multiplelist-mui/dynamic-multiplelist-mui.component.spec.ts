import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMultiplelistMuiComponent } from './dynamic-multiplelist-mui.component';

describe('DynamicMultiplelistMuiComponent', () => {
  let component: DynamicMultiplelistMuiComponent;
  let fixture: ComponentFixture<DynamicMultiplelistMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicMultiplelistMuiComponent]
    });
    fixture = TestBed.createComponent(DynamicMultiplelistMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
