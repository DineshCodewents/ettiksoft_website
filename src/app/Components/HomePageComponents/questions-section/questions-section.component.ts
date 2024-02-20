import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-section',
  templateUrl: './questions-section.component.html',
  styleUrls: ['./questions-section.component.css']
})
export class QuestionsSectionComponent {
  footerZIndex: number = -100;
  prevScrollPosition: number = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Determine scroll direction based on the change in scroll position
    const scrollDirection = scrollPosition > this.prevScrollPosition ? 'down' : 'up';

    // Get the height of the footer element
    const footerHeight = document.querySelector('footer')?.offsetHeight || 0;

    // Update the footer z-index based on scroll direction and reaching the end of the footer
    this.footerZIndex =
      scrollDirection === 'down' && scrollPosition + window.innerHeight >= document.body.scrollHeight - footerHeight
        ? 1
        : -100;

    // Update the previous scroll position
    this.prevScrollPosition = scrollPosition;
  }
  socialLinks: SocialLink[] = [
    { iconClass: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/company/ettiksofttechnologies-pvtltd/' },
    { iconClass: 'fa-brands fa-instagram', link: 'https://www.instagram.com/ettiksoft_technologies?igsh=cnljYzJxYnF2YnU4' },
    { iconClass: 'fa-brands fa-youtube', link: 'https://youtube.com/@Ettiksoft?si=dOAC3xsdKfbTQUCB' }
  ];
  navigateToAboutPage() {
    this.router.navigate(['/about-page']);
  }
  navigateToLifeAtEttiksoft(){
    this.router.navigate(['/life-at-ettiksoft'])
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
interface SocialLink {
  iconClass: string;
  link: string;
}
