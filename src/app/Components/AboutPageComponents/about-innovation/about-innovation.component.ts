import { Component } from '@angular/core';

@Component({
  selector: 'app-about-innovation',
  templateUrl: './about-innovation.component.html',
  styleUrls: ['./about-innovation.component.css']
})
export class AboutInnovationComponent {
  isVisible: boolean = false; 
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
