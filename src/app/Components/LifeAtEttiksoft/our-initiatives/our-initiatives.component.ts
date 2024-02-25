import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-initiatives',
  templateUrl: './our-initiatives.component.html',
  styleUrls: ['./our-initiatives.component.css']
})
export class OurInitiativesComponent {
  cards = [
    { 
      imageUrl: '../../../../assets/images/life-at-ettiksoft/SECTION5 -LAE/1.jpg', 
      heading: 'Social Impact Club', 
      content: 'The Social Impact Club engages employees in activities such as blood donation and tree planting.',
    },
    { 
      imageUrl: '../../../../assets/images/life-at-ettiksoft/SECTION5 -LAE/2.jpg', 
      heading: 'Wellness Warriors Club', 
      content: 'Promoting a healthy lifestyle, the Wellness Warriors Club designs walking and running plans for employees, organizing events like marathons to encourage physical well-being.',
    },
    { 
      imageUrl: '../../../../assets/images/life-at-ettiksoft/SECTION5 -LAE/3.jpg',
      heading: 'Speechcraft Hub', 
      content: 'The Speechcraft Hub provides a platform for employees to enhance their speech and presentation skills',
    },
  ];
  isLoading = true;
  @ViewChild('imageElement') imageElement!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const image = new Image();
    image.src = this.cards[0].imageUrl;
    image.src = this.cards[1].imageUrl;
    image.src = this.cards[2].imageUrl;
    image.onload = () => {
      this.isLoading = false;
    };
}
}
