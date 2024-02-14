import { Component } from '@angular/core';

@Component({
  selector: 'app-system-engineering-page',
  templateUrl: './system-engineering-page.component.html',
  styleUrls: ['./system-engineering-page.component.css']
})
export class SystemEngineeringPageComponent {
  selectedService: string = 'Automotive'; 
  serviceContent: any[] = [
    {
      service: 'Automotive',
      heading: 'System Engineering',
      paragraph: 'Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge.',
      imagePath: '../../../../assets/images/system-engineering-img.png'
    },{
      service: 'Medical',
      heading: 'Medical Engineering',
      paragraph: 'Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge.',
      imagePath: '../../../../assets/images/products-page-back.jpg'
    },
    {
      service: 'IOT',
      heading: 'IOT Engineering',
      paragraph: 'Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge..',
      imagePath: '../../../../assets/images/products-page-back.jpg'
    },
    {
      service: 'IIOT',
      heading: 'IIOT Engineering',
      paragraph: 'Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge.',
      imagePath: '../../../../assets/images/system-engineering-img.png'
    },
  ];

  updateService(service: string): void {
    this.selectedService = service;
  }
  getServiceContent(): any {
    return this.serviceContent.find(s => s.service === this.selectedService);
  }
}
