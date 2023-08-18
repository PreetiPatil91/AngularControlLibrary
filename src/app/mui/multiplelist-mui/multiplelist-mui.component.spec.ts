import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplelistMuiComponent } from './multiplelist-mui.component';

describe('MultiplelistMuiComponent', () => {
  let component: MultiplelistMuiComponent;
  let fixture: ComponentFixture<MultiplelistMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplelistMuiComponent]
    });
    fixture = TestBed.createComponent(MultiplelistMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
