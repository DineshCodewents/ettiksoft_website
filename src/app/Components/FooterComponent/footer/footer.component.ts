import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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
}
