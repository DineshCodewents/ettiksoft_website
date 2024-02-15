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
      paragraph: ['Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge.'],
      imagePath: '../../../../assets/images/system-engineering-img.png'
    },{
      service: 'Medical',
      heading: 'Medical',
      paragraph:[ 'A more compact operating system known as an embedded system is designed to perform one or more specific tasks. The healthcare sector frequently uses embedded systems for data storage and simple diagnosis.',
      'Doctors can employ medical equipment to further examine the patients symptoms instead of a physical examination and diagnosis. Scientists, researchers, and medical experts have collaborated to develop the best equipment imaginable for years.',
      'Modern medical gadgets that use embedded technologies include CT scanners, MRI machines, X-ray equipment, and ECG machines.'],
      imagePath: '../../../../assets/images/medical-img.jpg'
    },
    {
      service: 'IOT',
      heading: 'IOT',
      paragraph:['Over the past few years, IoT has become one of the most important technologies of the 21st century. Now that we can connect everyday objects—kitchen appliances, cars, thermostats, baby monitors—to the internet via embedded devices, seamless communication is possible between people, processes, and things.',
      'By means of low-cost computing, the cloud, big data, analytics, and mobile technologies, physical things can share and collect data with minimal human intervention. In this hyperconnected world, digital systems can record, monitor, and adjust each interaction between connected things. The physical world meets the digital world—and they cooperate.'] ,
      imagePath: '../../../../assets/images/iot-img.jpg'
    },
    {
      service: 'IIOT',
      heading: 'IIOT',
      paragraph: ['The industrial internet of things (IIoT) is the use of smart sensors, actuators and other devices, such as radio frequency identification tags, to enhance manufacturing and industrial processes. These devices are networked together to provide data collection, exchange and analysis. Insights gained from this process aid in more efficiency and reliability. Also known as the industrial internet, IIoT is used in many industries, including manufacturing, energy management, utilities, oil and gas.',
      ' IIoT uses the power of smart machines and real-time analytics to take advantage of the data that dumb machines have produced in industrial settings for years. The driving philosophy behind IIoT is that smart machines arent only better than humans at capturing and analyzing data in real time, but they are also better at communicating important information that can be used to drive business decisions faster and more accurately.']
      ,
      imagePath: '../../../../assets/images/iiot-img.jpg'
    },
  ];

  updateService(service: string): void {
    this.selectedService = service;
  }

  getServiceContent(): any {
    return this.serviceContent.find(s => s.service === this.selectedService);
  }
}
