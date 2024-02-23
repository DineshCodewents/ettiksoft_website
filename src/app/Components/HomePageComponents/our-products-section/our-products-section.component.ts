import { Component, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-our-products-section',
  templateUrl: './our-products-section.component.html',
  styleUrls: ['./our-products-section.component.css']
})
export class OurProductsSectionComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.animateOnScroll();
  }

  private animateOnScroll(): void {
    const element = this.el.nativeElement.querySelector('.our-team-col');
    const imgElement = this.el.nativeElement.querySelector('.cards-column');
    
    if (this.isElementHalfInViewport(element)) {
      this.renderer.addClass(element, 'slideInFromBottom');
    }
    if (this.isElementHalfInViewport(imgElement)) {
      this.renderer.addClass(imgElement, 'slideInFromBottom');
    }

  }

  private isElementHalfInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
      rect.top >= -rect.height / 2 &&
      rect.bottom <= windowHeight + rect.height / 2
    );
  }
}