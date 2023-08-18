import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryPngComponent } from './image-gallery-png.component';

describe('ImageGalleryPngComponent', () => {
  let component: ImageGalleryPngComponent;
  let fixture: ComponentFixture<ImageGalleryPngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalleryPngComponent]
    });
    fixture = TestBed.createComponent(ImageGalleryPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
