import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Card {
  title: string;
  path: string;
  content: string;
}
@Component({
  selector: 'app-company-nav',
  templateUrl: './company-nav.component.html',
  styleUrls: ['./company-nav.component.css']
})
export class CompanyNavComponent {
  column1: Card[] = [
    {
      title: 'About Us',
      path: 'about-page',
      content: 'Leading with innovation, sustainability, and customer focus.'
    },
    {
      title: 'Life at Ettiksoft',
      path: 'life-at-ettiksoft',
      content: 'Dynamic culture, innovation, and collaboration thrive'
    },
    {
      title: 'Careers',
      path: 'careers-page',
      content: 'Innovate, grow, and shape the future at Etiksoft!'
    },
  ];
  column3 = [
   
    {
      title:'Contact us',
      path:'contact-us',
      content:'Questions? Contact us for support!'
    }
  ];
  menuItems: { label: string, path: string }[] = [
    { label: "About Us", path: "about-page" },
    { label: "Life at Ettiksoft", path: "life-at-ettiksoft" },
    { label: "Careers", path: "careers-page" },
    { label: "Contact us", path: "contact-us" },
  ];
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    const navbar = document.querySelector('.navbar-toggler');
    if (navbar) {
      const instance = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      });
      navbar.dispatchEvent(instance);
    }
    this.router.navigateByUrl(path);
  }
  navigateToCompanyPage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
