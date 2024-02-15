import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent {
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

  ngOnInit() {
  }
}
