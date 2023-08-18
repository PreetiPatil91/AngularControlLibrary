import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery-png',
  templateUrl: './image-gallery-png.component.html',
  styleUrls: ['./image-gallery-png.component.css'],
})
export class ImageGalleryPngComponent {
  imageUrls: string[] = [
    'assets/images/sunflower.jpg',
    'assets/images/Bird.jpg',
    'assets/images/cat.jpg',
    'assets/images/Butterfly.jpg',
    // Add more image URLs as needed
  ];
}
