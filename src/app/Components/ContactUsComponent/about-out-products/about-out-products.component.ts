import { Component } from '@angular/core';
import { ContactFormService } from '../contact-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-about-out-products',
  templateUrl: './about-out-products.component.html',
  styleUrls: ['./about-out-products.component.css']
})
export class AboutOutProductsComponent {
  contactForm: FormGroup;
  isLoading = true;
  isImageLoaded = false;

  generateContactId(): string {
    const prefix = 'contact';
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
  
    return `${prefix}${randomDigits}`;
  }

  constructor(
    private fb: FormBuilder,
    private contactFormService: ContactFormService
  ) {
    this.contactForm = this.fb.group({
      contact_id: [""],
      contact_firstname: ['', Validators.required],
      contact_lastname: ['', Validators.required],
      contact_email: ['', [Validators.required, Validators.email]],
      contact_businessname: ['', [Validators.required]],
      contact_phone: ['', Validators.required],
      contact_query: ['', Validators.required],
      contact_message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formDataArray = this.contactForm.value;
      formDataArray.contact_id = this.generateContactId()

      this.contactFormService.addContactForm(formDataArray).subscribe(
        (response) => {
          console.log("Form test",response);
          console.log('Form submitted successfully:', response);
          this.contactForm.reset();
          this.showSuccessAlert();
        },
        (error) => {
          console.error('Error submitting the form:', error);
          console.log("Form test",error);

          this.showFaildAlert();
        }
      );
    } else {
      console.error('Form is invalid. Please check the fields.');
      this.showFaildAlert();
    }
  }
  showSuccessAlert(): void {
    window.alert('Contact form submitted successfully!');
  }
  showFaildAlert(): void {
    window.alert('Failed to submit the contact form. Please try again.');
  }
  onImageLoad(): void {
    this.isImageLoaded = true;
    this.isLoading = false;
  }
}
