import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-system-engineering-page',
  templateUrl: './system-engineering-page.component.html',
  styleUrls: ['./system-engineering-page.component.css']
})
export class SystemEngineeringPageComponent {
  selectedService: string = 'Automotive';
  isLoaded: boolean = true;
  serviceContent: any[] = [
    {
      service: 'Automotive',
      heading: 'System Engineering',
      paragraph: ['Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge.'],
      imagePath: '../../../../assets/images/system-engineering-img.png'
    },{
      service: 'Medical',
      heading: 'Medical',
      paragraph: [ 'Embedded systems, compact and task-specific, are widely utilized in healthcare for data storage and diagnostics. Medical professionals leverage advanced equipment, such as CT scanners and MRI machines, minimizing the need for physical examinations. Collaborative efforts of scientists and researchers continually enhance medical gadgets, ensuring optimal functionality.'],
      imagePath: '../../../../assets/images/medical-img.jpg'
    },
    {
      service: 'IOT',
      heading: 'IOT',
      paragraph: ['IoT, a transformative technology in the 21st century, has revolutionized the way everyday objects interact with the internet. This connectivity facilitates seamless communication between people, processes, and various devices. Through the integration of low-cost computing, cloud services, big data analytics, and mobile technologies, physical entities can efficiently share and collect data with minimal human intervention. In this hyperconnected landscape, digital systems play a crucial role in recording, monitoring, and dynamically adjusting interactions between connected things. This synergy marks the convergence of the physical and digital realms, fostering collaboration and efficiency.'] ,
      imagePath: '../../../../assets/images/iot-img.jpg'
    },
    {
      service: 'IIOT',
      heading: 'IIOT',
      paragraph: ['The Industrial Internet of Things (IIoT) employs smart sensors, actuators, and devices, including RFID tags, to optimize manufacturing processes. Networking these devices enables data collection, exchange, and analysis, enhancing efficiency and reliability. IIoT is widely used in manufacturing, energy, utilities, and oil/gas industries. It leverages smart machines and real-time analytics for superior data utilization. The core philosophy is that IIoT enhances decision-making by outperforming humans in data capture, analysis, and communication.']
      ,
      imagePath: '../../../../assets/images/iiot-img.jpg'
    },
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.onScroll(); 
    this.animateElements();
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log('Scrolling...');
    const element = this.el.nativeElement.querySelector('.col-md-4');
    const imgElement = this.el.nativeElement.querySelector('.col-md-8');
    if (this.isElementHalfInViewport(element)) {
      this.renderer.addClass(element, 'slideInLeft');
    }
    if (this.isElementHalfInViewport(imgElement)) {
      this.renderer.addClass(imgElement, 'slideInRight');
      this.isLoaded = false;
    }
  }

  private isElementHalfInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= -rect.height / 2 &&
      rect.left >= -rect.width / 2 &&
      rect.bottom <= windowHeight + rect.height / 2 &&
      rect.right <= windowWidth + rect.width / 2
    );
  }
  private reverseAnimationCompleted = false;
  private isChangingContent = false;
  private animateElements(): void {
    const element = this.el.nativeElement.querySelector('.col-md-4');
    const imgElement = this.el.nativeElement.querySelector('.col-md-8');

    // Function to handle reverse animation end
    const handleReverseAnimationEnd = () => {
      // Remove event listeners
      element.removeEventListener('animationend', handleReverseAnimationEnd);
      imgElement.removeEventListener('animationend', handleReverseAnimationEnd);

      // If changing to a new content, apply animation classes for the new content
      if (this.isChangingContent) {
        this.renderer.removeClass(element, 'slideInLeftReverse');
        this.renderer.removeClass(imgElement, 'slideInRightReverse');
        this.renderer.addClass(element, 'slideInLeft');
        this.renderer.addClass(imgElement, 'slideInRight');

        // Reset the flag
        this.isChangingContent = false;
        this.reverseAnimationCompleted = true;

        // Trigger the update of new content only after the reverse animation ends
        this.updateNewContent();
      }
    };

    // Add event listeners for reverse animation end
    element.addEventListener('animationend', handleReverseAnimationEnd);
    imgElement.addEventListener('animationend', handleReverseAnimationEnd);

    // If changing to a new content, apply reverse animation classes for the current content
    if (this.isChangingContent) {
      this.renderer.addClass(element, 'slideInLeftReverse');
      this.renderer.addClass(imgElement, 'slideInRightReverse');

      // Use Image object to handle image loading
      const img = new Image();
      img.src = this.getServiceContent()?.imagePath;
      img.onload = () => {
        // Trigger reflow to restart the animation
        void element.offsetWidth;
        void imgElement.offsetWidth;

        // Set loading state to false once the image is fully loaded
        this.isLoaded = false;
      };
    } else {
      // If not changing content, apply animation classes for the current content
      this.renderer.addClass(element, 'slideInLeft');
      this.renderer.addClass(imgElement, 'slideInRight');
    }
  }


  updateService(service: string): void {
    // Check if animation is already in progress or if the same service is selected
    if (this.isChangingContent || this.selectedService === service) {
      return;
    }
  
    this.isChangingContent = true; // Set the flag to indicate content change
    this.reverseAnimationCompleted = false;
  
    // Trigger reverse animation
    this.animateElements();
  
    // Delay fetching the new content until after the reverse animation completes
    setTimeout(() => {
      this.selectedService = service;
      this.updateNewContent();
    }, 800); // Adjust the delay time as needed (should match your animation duration)
  }
  getServiceContent(): any {
    return this.serviceContent.find(s => s.service === this.selectedService);
  }
  private updateNewContent(): void {
    // Only update new content if the reverse animation has completed
    if (this.reverseAnimationCompleted) {
      // Add logic to update the new content as needed
      // For example, you can call a function to fetch the new content
      // or directly update the content properties based on your application logic
      this.getServiceContent();
    }
  }
}