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
      paragraph: [ 'A more compact operating system known as an embedded system is designed to perform one or more specific tasks. The healthcare sector frequently uses embedded systems for data storage and simple diagnosis.',
      'Doctors can employ medical equipment to further examine the patients symptoms instead of a physical examination and diagnosis. Scientists, researchers, and medical experts have collaborated to develop the best equipment imaginable for years.',
      'Modern medical gadgets that use embedded technologies include CT scanners, MRI machines, X-ray equipment, and ECG machines.'],
      imagePath: '../../../../assets/images/medical-img.jpg'
    },
    {
      service: 'IOT',
      heading: 'IOT',
      paragraph: ['Over the past few years, IoT has become one of the most important technologies of the 21st century. Now that we can connect everyday objects—kitchen appliances, cars, thermostats, baby monitors—to the internet via embedded devices, seamless communication is possible between people, processes, and things.',
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

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.animateElements();
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
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