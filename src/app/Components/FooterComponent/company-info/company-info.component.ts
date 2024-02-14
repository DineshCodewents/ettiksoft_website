import { Component } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent {
  socialLinks: SocialLink[] = [
    { iconClass: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/company/ettiksofttechnologies-pvtltd/' },
    { iconClass: 'fa-brands fa-instagram', link: 'https://www.instagram.com/ettiksoft_technologies?igsh=cnljYzJxYnF2YnU4' },
    { iconClass: 'fa-brands fa-youtube', link: 'https://youtube.com/@Ettiksoft?si=dOAC3xsdKfbTQUCB' }
  ];
  constructor() {}
}

interface SocialLink {
  iconClass: string;
  link: string;
}
