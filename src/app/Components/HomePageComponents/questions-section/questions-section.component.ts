import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-questions-section',
  templateUrl: './questions-section.component.html',
  styleUrls: ['./questions-section.component.css']
})
export class QuestionsSectionComponent  {
  isOpenCompany: boolean = false;
  isOpenProducts: boolean = false;
  isOpenServices: boolean = false;
  isOpenContact: boolean = false;

  toggleAccordion(section: string) {
    if (window.innerWidth >= 568) return; // Only toggle under 568px

    this.isOpenCompany = section === 'Company' ? !this.isOpenCompany : false;
    this.isOpenProducts = section === 'Products' ? !this.isOpenProducts : false;
    this.isOpenServices = section === 'Services' ? !this.isOpenServices : false;
    this.isOpenContact = section === 'Contact' ? !this.isOpenContact : false;
  }



  siteLinks: SiteLink[] = [
    {
      category: 'Company',
      links: [
        { label: 'About us', path: 'about-page' },
        { label: 'Life at Ettiksoft', path: 'life-at-ettiksoft' },
        { label: 'Contact Us', path: 'contact-us' },
        { label: 'Careers', path: 'careers-page' },
      ]
    },
    {
      category: 'Products',
      links: [
        { label: 'Load Box', path: 'load-box' },
        { label: 'Break out Box', path: 'break-out-box' },
        { label: 'EMI Wiring', path: 'emi-wiring' },
        { label: 'EV Components Test System', path: 'ev-page' },
        { label: 'Variant switche', path: 'variant-switch' },
      ]
    },
    {
      category: 'Services',
      links: [
        { label: 'Mobility Engineering Services', path: 'mobility-engineering-page' },
        { label: 'IOT Solutions', path: 'iot-solution-page' },
      ]
    },
  ];

  socialLinks: SocialLink[] = [
    { title: 'LinkedIn', iconClass: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/company/ettiksofttechnologies-pvtltd/' },
    { title: 'Instagram', iconClass: 'fa-brands fa-instagram', link: 'https://www.instagram.com/ettiksoft_technologies?igsh=cnljYzJxYnF2YnU4' },
    { title: 'YouTube', iconClass: 'fa-brands fa-youtube', link: 'https://youtube.com/@Ettiksoft?si=dOAC3xsdKfbTQUCB' }
  ];
  private previousUrl : string |undefined;
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationStart => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      if (this.previousUrl !== event.url) {
        this.scrollToTop();
      }
      this.previousUrl = event.url;
    });
  }

  private scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  private scrollInside() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }
  goToTop() {
    const currentUrl = this.router.url;
    if (this.previousUrl === currentUrl) {
      // Smooth scroll to top
      this.scrollToTop();
    } else {
      // Instant scroll to top when navigating between pages
      this.scrollInside();
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
