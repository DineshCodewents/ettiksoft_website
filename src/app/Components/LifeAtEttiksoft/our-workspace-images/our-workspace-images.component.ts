import { Component} from '@angular/core';

@Component({
  selector: 'app-our-workspace-images',
  templateUrl: './our-workspace-images.component.html',
  styleUrls: ['./our-workspace-images.component.css']
})
export class OurWorkspaceImagesComponent  {
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}