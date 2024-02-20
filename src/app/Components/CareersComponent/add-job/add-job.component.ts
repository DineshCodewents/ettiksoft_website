import { Component } from '@angular/core';
import { AddJobService } from '../add-job.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  formData: any = {};
  formColumns = [
    {
      fields: [
        { id: 'job_role', label: 'Position', type: 'text' },
        { id: 'job_experience', label: 'Experience', type: 'number' },
        { id: 'job_language', label: 'Language', type: 'text' },
        { id: 'job_status', label: 'Job status', type: 'select', options: [
          { value: '', label: '' },
          { value: 'open', label: 'Open' },
          { value: 'close', label: 'Close' }, 
      ]},
        { id: 'job_responsibilities', label: 'Responsibilities', type: 'textarea' },
        
  ]},
    {
      fields: [
        { id: 'job_location', label: 'Location', type: 'text' },
        { id: 'job_package', label: 'Package', type: 'text' },
        { id: 'job_openings', label: 'No of Openings', type: 'number' },
        { id: 'job_postStatus', label: 'Post status', type: 'select', options: [
          { value: '', label: '' },
          { value: 'approved', label: 'Approved' },
          { value: 'rejected', label: 'Rejected' },
          { value: 'wating', label: 'Waiting' }, 
      ]},
        { id: 'job_requirements', label: 'Requirements', type: 'textarea' }
      ]
    }
  ];
  addJobForm: FormGroup;
  generateContactId(): string {
    const prefix = 'job';
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
  
    return `${prefix}${randomDigits}`;
  }
  constructor(
    private fb: FormBuilder,
    private contactFormService: AddJobService,
  ) {
    this.addJobForm = this.fb.group({
      job_id: [this.generateContactId()],
      job_role: ['', Validators.required],
      job_location: ['', Validators.required],
      job_experience: ['', Validators.required],
      job_package: ['', [Validators.required]],
      job_language: ['', Validators.required],
      job_openings: ['', Validators.required],
      job_responsibilities: ['', Validators.required],
      job_requirements: ['', Validators.required],
      job_postStatus: ['', Validators.required],
      job_status: ['', Validators.required],
      job_postedBy: [new Date()] 
    });
  }
  onSubmit(): void {
    console.log('Form validity:', this.addJobForm.valid);
  
    if (this.addJobForm.valid) {
      const formDataArray = this.addJobForm.value;
      console.log('Form Value:', formDataArray);
  
      this.contactFormService.addJobForm(formDataArray).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          this.addJobForm.reset();
          this.showSuccessAlert();
        },
        (error) => {
          console.error('Error submitting the form:', error);
        }
      );
    } else {
      console.error('Form is invalid. Please check the fields.');
      this.showFaildAlert();
    }
  }  
  showSuccessAlert(): void {
    window.alert('Job created successfully!');
  }
  showFaildAlert(): void {
    window.alert('Failed to submit the form. Please try again.');
  }
}