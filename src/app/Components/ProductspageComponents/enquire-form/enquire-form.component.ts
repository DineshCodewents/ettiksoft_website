import { Component } from '@angular/core';
import { EnquireFormService } from '../enquire-form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquirePopupService } from '../enquire-popup.service';

@Component({
  selector: 'app-enquire-form',
  templateUrl: './enquire-form.component.html',
  styleUrls: ['./enquire-form.component.css']
})
export class EnquireFormComponent {
  closePopup(): void {
    this.modalService.closePopup();
  }
  enquiryForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private contactFormService: EnquireFormService,
    private modalService: EnquirePopupService
  ) {
    this.enquiryForm = this.fb.group({
      enquiry_id: [""],
      enquiry_firstname: ['', Validators.required],
      enquiry_lastname: ['', Validators.required],
      enquiry_email: ['', [Validators.required, Validators.email]],
      enquiry_businessname: ['', [Validators.required]],
      enquiry_phone: ['', Validators.required],
      enquiry_query: ['', Validators.required],
      enquiry_message: ['', Validators.required],
      enquiry_product: ['', Validators.required],
    });
  }

  generateContactId(): string {
    const prefix = 'enquiry';
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}${randomDigits}`;
  }

  onSubmit(): void {
    if (this.enquiryForm.valid) {
      const formDataArray = this.enquiryForm.value;
      formDataArray.enquiry_id = this.generateContactId()

      this.contactFormService.addContactForm(formDataArray).subscribe(
        (response) => {
          console.log("Form test",response);
          console.log('Form submitted successfully:', response);
          this.enquiryForm.reset();
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
    window.alert('Enquire form submitted successfully!');
    this.modalService.closePopup();
  }
  showFaildAlert(): void {
    window.alert('Failed to submit the enquire form. Please try again.');
  }
}
