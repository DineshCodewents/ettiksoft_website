import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  menuItems: { label: string, path: string }[] = [
    { label: "Load Box", path: "load-box-page" },
    { label: "Break Out Box", path: "breakout-box-page" },
    { label: "EMI Wiring", path: "emi-wiring-page" },
    { label: "EV Components", path: "ev-component-page" },
    { label: "Variant Switch", path: "variant-switch-page" },
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
