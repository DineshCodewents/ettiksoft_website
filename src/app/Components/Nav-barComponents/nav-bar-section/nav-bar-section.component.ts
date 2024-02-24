import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar-section',
  templateUrl: './nav-bar-section.component.html',
  styleUrls: ['./nav-bar-section.component.css']
})
export class NavBarSectionComponent implements OnInit{

  showNavBar = false;
  showMenu = false; // Added variable for menu visibility
  lastScrollPosition = 0;

  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {}

  ngOnInit() {
    this.addClickOutsideListener();
    this.addRouterListener();
  }

  @HostListener('document:scroll')
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 50) {
      this.showNavBar = false;
    } else {
      this.showNavBar = true;
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.toggleHamburgerIcon();

    // Add logic to change background color when the menu is toggled
    const navBar = this.el.nativeElement.querySelector('.nav-bar');
    if (this.showMenu) {
      this.renderer.setStyle(navBar, 'background-color', 'black');
    } else {
      this.renderer.removeStyle(navBar, 'background-color');
    }
  }

  private toggleHamburgerIcon() {
    const navIcon = this.el.nativeElement.querySelector('#nav-icon1');
    this.renderer.removeClass(navIcon, 'open');
    if (this.showMenu) {
      this.renderer.addClass(navIcon, 'open');
    }
  }

  private addClickOutsideListener() {
    document.addEventListener('click', (event) => {
      if (!this.el.nativeElement.contains(event.target)) {
        // Clicked outside the nav-bar, close the menu
        this.showMenu = false;
        this.toggleHamburgerIcon();

        // Reset background color when closing the menu
        const navBar = this.el.nativeElement.querySelector('.nav-bar');
        this.renderer.removeStyle(navBar, 'background-color');
      }
    });
  }

  private addRouterListener() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Close the menu when navigating to another page
        this.showMenu = false;
        this.toggleHamburgerIcon();

        // Reset background color when closing the menu
        const navBar = this.el.nativeElement.querySelector('.nav-bar');
        this.renderer.removeStyle(navBar, 'background-color');
      });
  }
}
