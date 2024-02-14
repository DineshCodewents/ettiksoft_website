import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent {
  showNavBar = false;

  @HostListener('document:scroll')
  onWindowScroll() {
    this.showNavBar = window.scrollY > 50;
  }

  ngOnInit() {
  }
}
