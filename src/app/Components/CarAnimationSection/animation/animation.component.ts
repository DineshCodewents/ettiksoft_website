import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent {
  selectedService: string;

  serviceContent: any[] = [
    {
      service: 'Medical',
      heading: 'Medical',
      oneliner:'Network of Internet-connected medical devices',
      paragraph: [ 'Embedded systems, compact and task-specific, are widely utilized in healthcare for data storage and diagnostics. Medical professionals leverage advanced equipment, such as CT scanners and MRI machines, minimizing the need for physical examinations. Collaborative efforts of scientists and researchers continually enhance medical gadgets, ensuring optimal functionality.'],
      imagePath: '../../../../assets/images/medical-img.jpg'
    },
    {
      service: 'IOT',
      heading: 'IOT',
      oneliner:' Network of physical objects embedded with sensors ',
      paragraph: ['IoT, a transformative technology in the 21st century, has revolutionized the way everyday objects interact with the internet. This connectivity facilitates seamless communication between people, processes, and various devices. Through the integration of low-cost computing, cloud services, big data analytics, and mobile technologies, physical entities can efficiently share and collect data with minimal human intervention. In this hyperconnected landscape, digital systems play a crucial role in recording, monitoring, and dynamically adjusting interactions between connected things. This synergy marks the convergence of the physical and digital realms, fostering collaboration and efficiency.'] ,
      imagePath: '../../../../assets/images/iot-img.jpg'
    },
    {
      service: 'IIOT',
      heading: 'IIOT',
      oneliner:' network of Internet-connected medical devices',
      paragraph: ['The Industrial Internet of Things (IIoT) employs smart sensors, actuators, and devices, including RFID tags, to optimize manufacturing processes. Networking these devices enables data collection, exchange, and analysis, enhancing efficiency and reliability. IIoT is widely used in manufacturing, energy, utilities, and oil/gas industries. It leverages smart machines and real-time analytics for superior data utilization. The core philosophy is that IIoT enhances decision-making by outperforming humans in data capture, analysis, and communication.'],
      imagePath: '../../../../assets/images/iiot-img.jpg'
    },
  ];

  constructor() {
    // Initialize selectedService to 'Automotive' by default
    this.selectedService = 'Automotive';
  }
  ngOnInit(): void {
    // Initialize selectedService to 'Automotive' by default
    this.selectedService = 'Automotive';
  }
  updateService(service: string): void {
    if (service === 'Automotive') {
      this.selectedService = 'Automotive';
    } else {
      this.selectedService = service;
    }
  }

  getSelectedContent(): any {
    return this.serviceContent.find(content => content.service === this.selectedService);
  }
}
