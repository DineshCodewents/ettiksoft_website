import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ettiksoft-chronicles',
  templateUrl: './ettiksoft-chronicles.component.html',
  styleUrls: ['./ettiksoft-chronicles.component.css']
})
export class EttiksoftChroniclesComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const element = this.el.nativeElement.querySelector('.custom-image');
    if (this.isElementHalfInViewport(element)) {
      this.renderer.addClass(element, 'slide-in-from-left');
    } 

    const contentElement = this.el.nativeElement.querySelector('.content-section');
     const exploreBtnElement = this.el.nativeElement.querySelector('.explore-btn');
    if (this.isElementHalfInViewport(contentElement)) {
      this.renderer.addClass(contentElement, 'fadeInUp');
    }
     if (this.isElementHalfInViewport(exploreBtnElement)) {
      this.renderer.addClass(exploreBtnElement, 'fadeInUp');
    }
  }

  private isElementHalfInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= -rect.height / 2 &&
      rect.left >= -rect.width / 2 &&
      rect.bottom <= windowHeight + rect.height / 2 &&
      rect.right <= windowWidth + rect.width / 2
    );
  }
}
