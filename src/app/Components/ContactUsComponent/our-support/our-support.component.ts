import { Component } from '@angular/core';

@Component({
  selector: 'app-our-support',
  templateUrl: './our-support.component.html',
  styleUrls: ['./our-support.component.css']
})
export class OurSupportComponent {
  supportItems = [
    {
      imageSrc: '../../../../assets/images/contact-us/icons.svg',
      title: 'Product Support',
      text: 'Looking for a demo, or have questions about our products and pricing?',
      email: 'sales@ettiksoft.com'
    },
    {
      imageSrc: '../../../../assets/images/contact-us/icons (1).svg',
      title: 'Vendor Support',
      text: 'Looking for Billing or resource availability support?',
      email: 'vendorsupport@ettiksoft.com'
    },
    {
      imageSrc: '../../../../assets/images/contact-us/Group 28.svg',
      title: 'Partnerships or Collaboration',
      text: 'New Vendor or Integrations and Collaborations - we’re excited to partner with businesses of all kinds.',
      email: 'sales@ettiksoft.com'
    }
  ];
  isLoading = true;
  isImageLoaded = false;

  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
