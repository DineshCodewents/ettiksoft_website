import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-testimonial-section',
  templateUrl: './customer-testimonial-section.component.html',
  styleUrls: ['./customer-testimonial-section.component.css']
})
export class CustomerTestimonialSectionComponent {
  cards = [
    { 
      heading: '“Cybersecurity as a core”', 
      content: 'Embracing cybersecurity as a core has significantly bolstered the reliability and trustworthiness of our digital experiences, ensuring a safer and more secure customer journey',
      autorImg:'',
      authorName: 'John Doe',
      authorPosition: 'Product Manager ,BOSCH'
    },
    { 
      heading: '“Our experience with ettiksoft”', 
      content: 'Our experience with Ettiksoft has been transformative, leveraging cutting-edge technology to enhance efficiency and elevate our digital capabilities.',
      autorImg:'',
      authorName: 'David Chris',
      authorPosition: 'Product Manager ,Mahindra'
    },
  ];
}
