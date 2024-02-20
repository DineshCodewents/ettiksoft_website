import { Component } from '@angular/core';

@Component({
  selector: 'app-our-environment',
  templateUrl: './our-environment.component.html',
  styleUrls: ['./our-environment.component.css']
})
export class OurEnvironmentComponent  {
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
