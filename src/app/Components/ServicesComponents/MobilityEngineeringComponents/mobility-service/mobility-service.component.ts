import { Component } from '@angular/core';

@Component({
  selector: 'app-mobility-service',
  templateUrl: './mobility-service.component.html',
  styleUrls: ['./mobility-service.component.css']
})
export class MobilityServiceComponent {
  public iconClass: string = 'fa fa-angle-right';

  changeIcon() {
    this.iconClass = 'fa fa-arrow-right';
  }

  resetIcon() {
    this.iconClass = 'fa fa-angle-right';
  }
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }

  generateSkeleton(count: number): Array<any> {
    const skeletonArray = new Array(count).fill(null);
    return skeletonArray;
  }
}
