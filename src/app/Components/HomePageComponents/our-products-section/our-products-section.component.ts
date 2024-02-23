import { Component, ElementRef, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-our-products-section',
  templateUrl: './our-products-section.component.html',
  styleUrls: ['./our-products-section.component.css']
})
export class OurProductsSectionComponent implements AfterViewInit {
  private previousUrl: string | undefined = undefined;
  constructor(private el: ElementRef, private renderer: Renderer2,private router: Router) { 
    this.router.events.pipe(
    filter((event): event is NavigationStart => event instanceof NavigationStart)
  ).subscribe((event: NavigationStart) => {
    if (this.previousUrl !== event.url) {
      this.scrollInside();
    }
    this.previousUrl = event.url;
  });
}

public scrollInside(): void {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });
}

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