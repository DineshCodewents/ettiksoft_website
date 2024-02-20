import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dynamic-innovative-section',
  templateUrl: './dynamic-innovative-section.component.html',
  styleUrls: ['./dynamic-innovative-section.component.css'],
})
export class DynamicInnovativeSectionComponent  {
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}