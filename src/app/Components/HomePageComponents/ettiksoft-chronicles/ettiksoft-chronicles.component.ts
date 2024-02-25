import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ettiksoft-chronicles',
  templateUrl: './ettiksoft-chronicles.component.html',
  styleUrls: ['./ettiksoft-chronicles.component.css']
})
export class EttiksoftChroniclesComponent {
 
  constructor(private el: ElementRef, private renderer: Renderer2,private router: Router) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const elementOne = this.el.nativeElement.querySelector('.img-1');
    const elementTwo = this.el.nativeElement.querySelector('.img-2');
    const elementThree = this.el.nativeElement.querySelector('.img-3');
    if (this.isElementHalfInViewport(elementOne)) {
      this.renderer.addClass(elementOne, 'slideInFromRight');
    } 
    if (this.isElementHalfInViewport(elementTwo)) {
      this.renderer.addClass(elementTwo, 'slideInFromRight');
    } 
    if (this.isElementHalfInViewport(elementThree)) {
      this.renderer.addClass(elementThree, 'slideInFromRight');
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
