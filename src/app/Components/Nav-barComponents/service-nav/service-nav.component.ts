import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Card {
  title: string;
  path: string;
  content: string;
}
@Component({
  selector: 'app-service-nav',
  templateUrl: './service-nav.component.html',
  styleUrls: ['./service-nav.component.css']
})
export class ServiceNavComponent {
  column1: Card[] = [
    {
      title: 'IOT Solutions',
      path: 'iot-solution-page',
      content: 'Ettiksofts IIoT solutions guarantee a secure, safe, and intelligent ecosystem, evolving alongside user experiences.'
    },
    {
      title: 'Mobility Engineering',
      path: 'mobility-engineering-page',
      content: 'Our experties focuses on reliability, safety, and cyber security in Mobility Engineeering.'
    },
  ]
  menuItems: { label: string, path: string }[] = [
    { label: "IOT Solutions", path: "iot-solution-page" },
    {label:"Mobility Engineering", path:"mobility-engineering-page"}
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
  navigateToServicePage(path: string): void {
    this.router.navigateByUrl(path);
  }
}
