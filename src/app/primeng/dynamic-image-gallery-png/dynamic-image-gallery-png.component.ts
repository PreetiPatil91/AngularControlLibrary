import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-image-gallery-png',
  templateUrl: './dynamic-image-gallery-png.component.html',
  styleUrls: ['./dynamic-image-gallery-png.component.css']
})
export class DynamicImageGalleryPngComponent {
  @Input() images: string[] = [];
  activeIndex: number = 0;

  showImage(index: number): void {
    this.activeIndex = index;
  }
}
