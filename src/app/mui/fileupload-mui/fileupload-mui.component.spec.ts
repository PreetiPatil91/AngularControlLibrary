import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadMuiComponent } from './fileupload-mui.component';

describe('FileuploadMuiComponent', () => {
  let component: FileuploadMuiComponent;
  let fixture: ComponentFixture<FileuploadMuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileuploadMuiComponent]
    });
    fixture = TestBed.createComponent(FileuploadMuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
