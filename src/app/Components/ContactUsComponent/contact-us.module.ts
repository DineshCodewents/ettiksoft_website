import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutOutProductsComponent } from './about-out-products/about-out-products.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { OurSupportComponent } from './our-support/our-support.component';
import { WorkingCountriesComponent } from './working-countries/working-countries.component';
import { ContactUsDirective } from './contact-us.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormService } from './contact-form.service';



@NgModule({
  declarations: [
    AboutOutProductsComponent,
    ContactUsPageComponent,
    OurSupportComponent,
    WorkingCountriesComponent,
    ContactUsDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ContactFormService],
})
export class ContactUsModule { }
