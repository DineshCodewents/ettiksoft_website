import { Component } from '@angular/core';

@Component({
  selector: 'app-questions-section',
  templateUrl: './questions-section.component.html',
  styleUrls: ['./questions-section.component.css']
})
export class QuestionsSectionComponent {
  socialLinks: SocialLink[] = [
    { iconClass: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/company/ettiksofttechnologies-pvtltd/' },
    { iconClass: 'fa-brands fa-instagram', link: 'https://www.instagram.com/ettiksoft_technologies?igsh=cnljYzJxYnF2YnU4' },
    { iconClass: 'fa-brands fa-youtube', link: 'https://youtube.com/@Ettiksoft?si=dOAC3xsdKfbTQUCB' }
  ];
  
}
interface SocialLink {
  iconClass: string;
  link: string;
}
