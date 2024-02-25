import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CareersFormService } from '../careers-form.service';

interface FormField {
  label: string;
  name: string;
  type: string;
  required: boolean;
  iconClass?: string;
  placeholder?: string;
  id?: string;
  fileType?: string;
}
interface FormColumn {
  fields: FormField[];
}

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.css']
})
export class FormSectionComponent {
  applicationForm: FormGroup = this.fb.group({});
  resumeFile: File | null = null;
  formColumns: FormColumn[] = [
    {
      fields: [
        { label: 'Full Name', name: 'career_name', type: 'text', required: true, id: 'career_name' },
        { label: 'Mobile Number', name: 'career_phone', type: 'text', required: true, id: 'career_phone' },
        { label: 'Country', name: 'career_country', type: 'text', required: true, id: 'career_country' },
        { label: 'LinkedIn URL', name: 'career_linkedin', type: 'text', iconClass: 'fa fa-linkedin-square', required: false, id: 'career_linkedin' }
      ]
    },
    {
      fields: [
        { label: 'Email', name: 'career_email', type: 'email', required: true, id: 'career_email', },
        { label: 'Experience (in years)', name: 'career_experience', type: 'number', required: true, id: 'career_experience' },
        { label: 'City', name: 'career_city', type: 'text', required: true, id: 'career_city' },
        { label: 'Resume Upload', name: 'resumefile_name', type: 'file', required: true, placeholder: 'Choose file', id: 'resumefile_name' }
      ]
    }
  ];
  generateContactId(): string {
    const prefix = 'career';
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}${randomDigits}`;
  }

  generatejobtId(): string {
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `${randomDigits}`;
  }

  constructor(private fb: FormBuilder, private careersFormService: CareersFormService) {
    this.applicationForm = this.fb.group({
      career_id: [this.generateContactId()],
      career_name: ['', Validators.required],
      career_phone: ['', Validators.required],
      career_country: ['', Validators.required],
      career_linkedin: ['', [Validators.required]],
      career_email: ['', Validators.required],
      career_experience: ['', Validators.required],
      career_city: ['', Validators.required],
      career_jobId: [this.generatejobtId()],
      resumefile_name: [null, Validators.required] 
    });

  }

  onSubmit(): void {
    console.log('Form validity:', this.applicationForm.valid);
  
    if (this.applicationForm.valid && this.resumeFile) {
      console.log('Form is valid, proceeding with submission...');
      
      const formDataArray = this.applicationForm.value;
      console.log('Form Value:', formDataArray);
  
      this.careersFormService.addCareerForm(formDataArray).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
          this.applicationForm.reset();
          this.showSuccessAlert();
        },
        (error) => {
          console.error('Error submitting the form:', error);
        }
      );
  
      const resumeFormData = new FormData();
      resumeFormData.append('resumefile_name', this.applicationForm.get('resumefile_name')?.value || 'resume.pdf');
      resumeFormData.append('resumefile_data', this.resumeFile, this.resumeFile?.name || 'resume.pdf');
  
      this.careersFormService.uploadfile(this.applicationForm.get('career_id')?.value, resumeFormData).subscribe(
        (uploadResponse) => {
          console.log('Resume uploaded successfully:', uploadResponse);
          this.applicationForm.reset();
          this.showSuccessAlert();
        },
        (uploadError) => {
          console.error('Error uploading resume:', uploadError);
        }
      );
    } else {
      console.error('Form is invalid or resume file is missing. Please check the fields.');
      console.log('Form validity:', this.applicationForm.valid);
      console.log('Resume file:', this.resumeFile);
      this.showFaildAlert();
    }
  }
  
  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.resumeFile = inputElement.files[0];
      this.applicationForm.get('resumefile_name')?.setValue(this.resumeFile.name);
    } else {
      this.resumeFile = null;
      this.applicationForm.get('resumefile_name')?.setValue(null);
    }
  }
  showSuccessAlert(): void {
    window.alert('Careers form submitted successfully!');
  }
  showFaildAlert(): void {
    window.alert('Failed to submit the form. Please try again.');
  }
  getCareerData(): void {
    this.careersFormService.getCareerData().subscribe(
      (data) => {
        console.log('Career Data:', data);
      },
      (error) => {
        console.error('Error getting career data:', error);
      }
    );
  }
}
