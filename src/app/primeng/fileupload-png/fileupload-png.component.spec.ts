import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadPngComponent } from './fileupload-png.component';

describe('FileuploadPngComponent', () => {
  let component: FileuploadPngComponent;
  let fixture: ComponentFixture<FileuploadPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileuploadPngComponent]
    });
    fixture = TestBed.createComponent(FileuploadPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
