import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicImageGalleryPngComponent } from './dynamic-image-gallery-png.component';

describe('DynamicImageGalleryPngComponent', () => {
  let component: DynamicImageGalleryPngComponent;
  let fixture: ComponentFixture<DynamicImageGalleryPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicImageGalleryPngComponent]
    });
    fixture = TestBed.createComponent(DynamicImageGalleryPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
