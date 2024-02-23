import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-questions-section',
  templateUrl: './questions-section.component.html',
  styleUrls: ['./questions-section.component.css']
})
export class QuestionsSectionComponent  {
  siteLinks: SiteLink[] = [
    {
      category: 'Company',
      links: [
        { label: 'About us', path: '/about-page' },
        { label: 'Life at Ettiksoft', path: '/life-at-ettiksoft' },
        { label: 'Contact Us', path: '/contact-us' },
        { label: 'Careers', path: '/careers-page' },
      ]
    },
    {
      category: 'Products',
      links: [
        { label: 'Load Box', path: '/load-box' },
        { label: 'Break out Box', path: '/break-out-box' },
        { label: 'EMI Wiring', path: '/emi-wiring' },
        { label: 'EV Components Test System', path: '/ev-page' },
        { label: 'Variant switche', path: '/variant-switch' },
      ]
    },
    {
      category: 'Services',
      links: [
        { label: 'Mobility Engineering Services', path: '/mobility-engineering-page' },
        { label: 'IOT Solutions', path: '/iot-solution-page' },
      ]
    },
  ];

  socialLinks: SocialLink[] = [
    { title: 'LinkedIn', iconClass: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/company/ettiksofttechnologies-pvtltd/' },
    { title: 'Instagram', iconClass: 'fa-brands fa-instagram', link: 'https://www.instagram.com/ettiksoft_technologies?igsh=cnljYzJxYnF2YnU4' },
    { title: 'YouTube', iconClass: 'fa-brands fa-youtube', link: 'https://youtube.com/@Ettiksoft?si=dOAC3xsdKfbTQUCB' }
    // Add more social links as needed
  ];

  private previousUrl : string |undefined;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) : event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (this.previousUrl !== event.urlAfterRedirects){
      this.scrollToTop();
      }
      this.previousUrl = event.urlAfterRedirects;
    });
  }

  private scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  private scrollInside() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  goToTop() {
    const currentUrl = this.router.url;
    if (this.previousUrl === currentUrl){
      this.scrollInside();
    } else {
      this.router.navigate(['/'], {fragment: 'top'});
    }
  }
}

interface SiteLink {
  category: string;
  links: NavLink[];
}

interface NavLink {
  label: string;
  path: string;
}

interface SocialLink {
  title: string;
  iconClass: string;
  link: string;
}
