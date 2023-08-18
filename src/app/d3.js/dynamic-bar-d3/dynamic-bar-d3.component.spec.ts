import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBarD3Component } from './dynamic-bar-d3.component';

describe('DynamicBarD3Component', () => {
  let component: DynamicBarD3Component;
  let fixture: ComponentFixture<DynamicBarD3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicBarD3Component]
    });
    fixture = TestBed.createComponent(DynamicBarD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
