import { Component } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  jobDetails = [
    {
      role: 'Python Developer',
      experience: '1-2 years',
      location: 'Namakkal',
      responsibilities: [
        'Work as a solution developer and build procurement solutions as per the product specifications',
        'Communicate with product managers and stakeholders to understand the nuances of the product features/requirements',
        'Design, develop, test, and generate builds according to the Sprint plans',
        'Write documentation and best practices for the developed features',
        'Work closely with the Consulting team and help them with understanding and adopting the new features/modules.',
        'Gain deep domain understanding of supply chain and procurement operations across functional and technical spectrums',
        'Communicate regularly with Development Managers/Product Managers, on deliverables status and risks Requirements'
      ],
      requirements: [
        'Strong understanding of object-oriented principles with an ability to write clean code',
        'Very strong logical thinking capabilities and analytical skills',
        'Adept knowledge in SDLC Process, QA Automation, etc.',
        'Knowledge of the basic concepts of procurement and supply chain',
        'Strong written and spoken communication skills',
        'Hands-on programming knowledge in Python, JS, SQL is strongly desired',
        'Knowledge/Experience with Salesforce / Coupa / SAP Ariba is an added advantage'
      ]
    },
  ];
  public iconClass: string = 'fa fa-angle-right';

  changeIcon() {
    this.iconClass = 'fa fa-arrow-right';
  }

  resetIcon() {
    this.iconClass = 'fa fa-angle-right';
  }
}
