import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContactUs]'
})
export class ContactUsDirective {
  private animatedElements: Set<Element> = new Set();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkElementsVisibility();
  }

  private checkElementsVisibility() {
    const sections = document.querySelectorAll('.animate-on-scroll, .image-scroll');

    sections.forEach((section) => {
      if (!section.classList.contains('visible')) {
        const bounding = section.getBoundingClientRect();
        const isVisible = bounding.top < window.innerHeight && bounding.bottom >= 0;

        if (isVisible) {
          this.renderer.addClass(section, 'visible');
          this.animatedElements.add(section);
        }
      }
    });
  }
}

