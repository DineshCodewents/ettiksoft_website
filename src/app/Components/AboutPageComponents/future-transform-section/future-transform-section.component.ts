import { Component } from '@angular/core';

@Component({
  selector: 'app-future-transform-section',
  templateUrl: './future-transform-section.component.html',
  styleUrls: ['./future-transform-section.component.css']
})
export class FutureTransformSectionComponent {
  isVisible: boolean = false; 
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
