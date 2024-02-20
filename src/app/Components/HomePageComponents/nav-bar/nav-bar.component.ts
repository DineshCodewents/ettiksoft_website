import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  showNavBar = false;
  lastScrollPosition = 0;

  @HostListener('document:scroll')
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 50) {
      this.showNavBar = false; // Scrolling down, hide nav-bar
    } else {
      this.showNavBar = true; // Scrolling up or at the top, show nav-bar
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}
