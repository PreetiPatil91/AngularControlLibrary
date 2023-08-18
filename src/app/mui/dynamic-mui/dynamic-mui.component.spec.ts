import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMuiComponent } from './dynamic-mui.component';

describe('DynamicMuiComponent', () => {
  let component: DynamicMuiComponent;
  let fixture: ComponentFixture<DynamicMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicMuiComponent]
    });
    fixture = TestBed.createComponent(DynamicMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
