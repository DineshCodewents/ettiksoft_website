import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  title: string;
  path: string;
  content: string;
}

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent {

  column1: Card[] = [
    {
      title: 'Load Box',
      path: 'load-box',
      content: 'Revolutionize your automotive ECU bench testing with our cutting-edge Load Box!'
    },
    {
      title: 'Break Out Box',
      path: 'break-out-box',
      content: 'Explore the precision testing with our Breakout Box'
    },
    {
      title: 'EMI Wiring',
      path: 'emi-wiring',
      content: 'Elevate Your Automotive ECU/VCU Testing with Our EMI/EMC Wiring'
    },
  ];

  column2: Card[] =[
    {
      title: 'EV Components',
      path: 'ev-page',
      content: 'We make custom Q test systems for vehicle production lines.'
    },
    {
      title: 'Variant Switch',
      path: 'variant-switch',
      content: 'Variant switcher enables remote operation of changing the ECU variants (DUT) with the HIL'
    },
  ];
  menuItems: { label: string, path: string }[] = [
    { label: "Load Box", path: "load-box" },
    { label: "Break Out Box", path: "break-out-box" },
    { label: "EMI Wiring", path: "emi-wiring" },
    { label: "EV Components", path: "ev-page" },
    { label: "Variant Switch", path: "variant-switch" },
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



  navigateToProductPage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
