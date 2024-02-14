import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerLinks = [
    { label: 'Home |', url: '' },
    // { label: 'Terms of use |', url: '' },
    // { label: 'Privacy Policy |', url: '' },
    // { label: 'Cookie Policy |', url: '' },
    // { label: 'Compliance |', url: '' },
    { label: 'Contact us', url: 'contact-us-page' },
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
