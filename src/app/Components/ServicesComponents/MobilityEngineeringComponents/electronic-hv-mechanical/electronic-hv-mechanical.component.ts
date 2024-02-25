import { Component } from '@angular/core';

@Component({
  selector: 'app-electronic-hv-mechanical',
  templateUrl: './electronic-hv-mechanical.component.html',
  styleUrls: ['./electronic-hv-mechanical.component.css']
})
export class ElectronicHvMechanicalComponent {
  isLoading = true;
  isImageLoaded = false;


  onImageLoad() {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
  sectionsData = [
    { id:'1',
      image:'../../../../../assets/images/service/mobility-engineering/electronic-hv-img.jpg',
      title: 'Electronic HW and Mechanical.',
      services: ['ECU design for Automotive grade', 'PCB design', '3d Mechanical design', 'Concept to Prototype (POC)'],
      tools: ['Cadence Orcad', 'Solidworks', 'Autocad', 'Sketchup'],
      showHiddenContent: false,
      showTools: false,
      showAdditionalServices: false
    },
    { id:'2',
      image:'../../../../../assets/images/service/mobility-engineering/model-based-img.jpg',
      title: 'Model Based System Engineering.',
      services: [
        'System use case or scenario or operational analysis.',
        'System functional & Non-functional need analysis through executable simulation models',
        'Establishing System logical architecture and view points',
        'Design synthesis using architecture analysis models',
        'Establishing Physical architecture',
        'Establishing integrated view points for Fusa & Security Analysis.',
        'Establishing handover protocol to down stream engineering such as HW and SW through MBD or requirements based by using Doors or Polarion',
        'Establishing ASPICE process around model based system engineering.'
      ],
      tools: ['IBM-Harmony System Engineering method by using SysML tools such as Rhapsody,EA.', 'Opensource Arcadia System Engineering method by using Cappella tool chains'],
      showHiddenContent: false,
      showTools: false,
      showAdditionalServices: false
    },
    { id:'3',
      image:'../../../../../assets/images/service/mobility-engineering/functional-safety-img.jpg',
      title: 'Functional Safety Engineering.',
      services: ['System level Model based Component Fault Tree Analysis ( C-FTA –Integrated with system engineering )', 'System level FMEA (Integrated with system engineering)', 'Establishing FSC & TSC architectural view points along with system model', 'Safety analysis at SW and HW level', 'Dependant failure analysis', 'HW fault metrics calculation through FMEDA', 'Safety requirement engineering including test criteria establishment.', 'Test case and Test results review.', 'Establishment of traceability and traceability review.', 'Safety case preparation through Goal Structuring Notation (GSN).', 'Preparation support for Safety Audit.'],
      tools: ['Medini Analyze', 'SILcal', 'FMEDAx', 'LDRA tool Suite', 'CANTATA', 'ParaSoft', 'CFTA', 'GSN'],
      showHiddenContent: false,
      showTools: false,
      showAdditionalServices: false
    },
    { id:'4',
      image:'../../../../../assets/images/service/mobility-engineering/Cyber-Security-img.jpg',
      title: 'Road Vehicle Cyber Security Engineering.',
      services: ['Model based TARA analysis in conjunction with system engineering.', 'System level & SW level Cyber security concept architectural view point establishment', 'Support for maintenance face through continues evaluation of latest thread', 'Requirement engineering for Cyber security relevant items or components', 'Test case and validation results review.', 'Penetration and Fuzz testing.', 'Cyber security process adherence review.', 'Cyber security case preparation.'],
      tools: ['Yakindu Security Analyst (Model based TARA )', 'Synopsys – Test Tools', 'Attack Potential approach', 'CVSS approach', 'Attack Vector approach'],
      showHiddenContent: false,
      showTools: false,
      showAdditionalServices: false
    },
    { id:'5',
      image:'../../../../../assets/images/service/mobility-engineering/automative-software-img.jpg',
      title: 'Automotive Software Engineering.',
      services:['Ethernet, Flexray, CAN, LIN driver development and network configuration.', 'Basic software stack integration , RTE configuration.', 'Diag communication configuration according to UDS', 'Stack and M-CAL driver development adhering to ASPICE and ISO26262 process', 'RTE configuration and integration', 'CI integration test development', 'CI test system development', 'Cyber security case preparation.'],
      tools:['AUTOSAR Classic, Adaptive', 'Vector tools', 'KPIT – KSAR tools', 'Mentor Graphics V-Star tools', 'Bosch –Isolar'],
      showHiddenContent: false,
      showTools: false,
      showAdditionalServices: false
    }
  ];
  toggleHiddenContent(sectionIndex: number) {
    const currentSection = this.sectionsData[sectionIndex];
    currentSection.showHiddenContent = !currentSection.showHiddenContent;     
    if (currentSection.showHiddenContent && currentSection.tools.length > 0) {
      currentSection.showTools = true;
    } else {
      currentSection.showTools = false;
    }
  
    if (currentSection.showHiddenContent && (sectionIndex === 0 || sectionIndex ===1 ||sectionIndex === 2 || sectionIndex === 3 || sectionIndex === 4)) {
      currentSection.showAdditionalServices = true;
    } else {
      currentSection.showAdditionalServices = false;
    }
  }
  
}
