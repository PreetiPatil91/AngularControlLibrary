import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGridMuiComponent } from './dynamic-grid-mui.component';

describe('DynamicGridMuiComponent', () => {
  let component: DynamicGridMuiComponent;
  let fixture: ComponentFixture<DynamicGridMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicGridMuiComponent]
    });
    fixture = TestBed.createComponent(DynamicGridMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
