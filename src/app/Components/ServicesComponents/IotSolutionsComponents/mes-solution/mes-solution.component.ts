import { Component } from '@angular/core';

@Component({
  selector: 'app-mes-solution',
  templateUrl: './mes-solution.component.html',
  styleUrls: ['./mes-solution.component.css']
})
export class MesSolutionComponent {
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
