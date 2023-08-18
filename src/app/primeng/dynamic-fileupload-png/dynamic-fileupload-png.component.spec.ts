import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFileuploadPngComponent } from './dynamic-fileupload-png.component';

describe('DynamicFileuploadPngComponent', () => {
  let component: DynamicFileuploadPngComponent;
  let fixture: ComponentFixture<DynamicFileuploadPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFileuploadPngComponent]
    });
    fixture = TestBed.createComponent(DynamicFileuploadPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
