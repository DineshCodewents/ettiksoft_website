import { Component } from '@angular/core';

@Component({
  selector: 'app-car-animation',
  templateUrl: './car-animation.component.html',
  styleUrls: ['./car-animation.component.css']
})
export class CarAnimationComponent {
  selectedGroup: string = "c-group1";
  selectedLine: string = "line1";
  selectedContent: any = {};

  content: any[] = [
    {
        
        heading: 'System Engineering and Architecture',
        paragraph: 'Systems can be anything ranging from products, services, or information. As a System Engineer, you’re the go-to person for fixing things and talking to everyone involved in making and using the system. A system engineer functions as a problem-solving superhero. They supervise intricate systems to address substantial issues. They also have to manage everything from the inception of an idea to its realization.'
    }, {
       
        heading: 'Automotive Cyber Security ',
        paragraph: 'Cybersecurity, within the context of road vehicles, is the protection of automotive electronic systems, communication networks, control algorithms, software, users, and underlying data from malicious attacks, damage, unauthorized access, or manipulation.'

    },
    {
   
        heading: 'Automotive Functional Safety',
        paragraph: 'Functional safety provides a necessary structure for automotive developers to design systems so that they can minimize the harm to the driver and other road users caused due to malfunctioning electronics/software in the vehicle.'

    },
    {
      
        heading: 'Model Based Development',
        paragraph: 'Model based development asks for requirements to be in a database where each requirement is an object and a direct derivative of the overall product requirements. Requirements must flow down from the product level requirements to requirements for the individual systems, smaller sub-systems and components.'

    },
    {
       
        heading: 'Complex Device Driver Development',
        paragraph: 'The Complex Device Driver (CDD) Software Component is used to model a function outside of the normal AUTOSAR Basic Software stack for complex or resource critical sensor evaluation or actuator control, especially for hardware that is not directly supported by AUTOSAR (like project specific ASICs).'

    },
    {
       
        heading: 'Boot Loader',
        paragraph: 'A bootloader, also spelled as boot loader or called bootstrap loader, is a computer program that is responsible for booting a computer. If it also provides an interactive menu with multiple boot choices then its often called a boot manager.'

    },
    {
        
        heading: 'AUTOSAR',
        paragraph: 'AUTomotive Open System ARchitecture is a development partnership of automotive interested parties founded in 2003. It is focused on creating and establishing an open and standardized software architecture for automotive electronic control units.'
    },
];
ngOnInit(): void {
  // Initialize selected content with default values
  this.updateContent(1);
}

  applyPopUpEffect(groupId: string, lineId: number) {
    if (this.selectedGroup !== "" && (this.selectedGroup !== groupId && this.selectedLine !== `line${lineId}`)) {
      this.moveDown();
      this.moveUp(groupId, lineId);
    } else {
      this.moveUp(groupId, lineId);
    }

   
  }

  moveDown() {
    const lineElement = document.getElementById(this.selectedLine);
    if (lineElement) {
      lineElement.style.transition = 'transform 0.3s ease';
      lineElement.style.transform = 'scaleY(1)';
      lineElement.style.transformOrigin = 'bottom';
    }
    const groupElement = document.getElementById(this.selectedGroup);
    if (groupElement) {
      groupElement.style.transition = 'transform 0.3s ease';
      groupElement.style.transform = 'translateY(0)';
    }
    this.selectedGroup = "";
    this.selectedLine = "";
  }

  moveUp(groupId: string, lineId: number) {
    console.log(lineId);
    const lineElement = document.getElementById(`line${lineId}`);
    if (lineElement) {
      lineElement.style.transition = 'transform 0.3s ease';
      lineElement.style.transformOrigin = 'bottom';
      lineElement.style.transform = 'scaleY(1.2)';
      this.selectedLine = `line${lineId}`;
      // Assuming setselectedKey is a method to set some value, implement it as per your requirement
      // setselectedKey(lineId - 1);
    }
    const groupElement = document.getElementById(groupId);
    if (groupElement) {
      groupElement.style.transition = 'transform 0.3s ease';
      groupElement.style.transform = 'translateY(-100px)';
      this.selectedGroup = groupId;
    }
    this.updateContent(lineId);
  }

  updateContent(lineId: number) {
    this.selectedContent = this.content[lineId - 1];
    // Assuming setselectedKey is a method to set some value, implement it as per your requirement
    // setselectedKey(lineId - 1);
    // Update content based on lineId
    // For example:
    // this.selectedContent = this.content[lineId - 1];
  }
}