import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadDynamicMuiComponent } from './fileupload-dynamic-mui.component';

describe('FileuploadDynamicMuiComponent', () => {
  let component: FileuploadDynamicMuiComponent;
  let fixture: ComponentFixture<FileuploadDynamicMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileuploadDynamicMuiComponent]
    });
    fixture = TestBed.createComponent(FileuploadDynamicMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
