import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTestimonialSectionComponent } from './customer-testimonial-section.component';

describe('CustomerTestimonialSectionComponent', () => {
  let component: CustomerTestimonialSectionComponent;
  let fixture: ComponentFixture<CustomerTestimonialSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerTestimonialSectionComponent]
    });
    fixture = TestBed.createComponent(CustomerTestimonialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
