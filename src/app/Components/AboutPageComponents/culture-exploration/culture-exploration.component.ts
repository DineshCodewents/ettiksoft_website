import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-culture-exploration',
  templateUrl: './culture-exploration.component.html',
  styleUrls: ['./culture-exploration.component.css']
})
export class CultureExplorationComponent {
  isVisible: boolean = false; 
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
  constructor(private router: Router) {}

  navigateToLifeAtEttikPage() {
    this.router.navigate(['life-at-ettiksoft']);
  }
}
