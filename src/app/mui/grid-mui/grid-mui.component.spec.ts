import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMuiComponent } from './grid-mui.component';

describe('GridMuiComponent', () => {
  let component: GridMuiComponent;
  let fixture: ComponentFixture<GridMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridMuiComponent]
    });
    fixture = TestBed.createComponent(GridMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
