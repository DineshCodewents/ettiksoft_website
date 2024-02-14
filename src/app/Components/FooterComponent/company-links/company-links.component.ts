import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-company-links',
  templateUrl: './company-links.component.html',
  styleUrls: ['./company-links.component.css']
})
export class CompanyLinksComponent {
  menuItems: { label: string, path: string }[] = [
    { label: "About Us", path: "about-page" },
    { label: "Life at Ettiksoft", path: "life-at-ettiksoft" },
    // { label: "Our Customers", path: "#" },
    // { label: "Our Team", path: "#" },
    // { label: "Gallery", path: "#" },
    // { label: "Collaboration", path: "#" },
    { label: "Careers", path: "careers-page" },
    { label: "Contact us", path: "contact-us-page" },
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
