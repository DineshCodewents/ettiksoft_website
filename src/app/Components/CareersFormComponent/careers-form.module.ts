import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersFormService } from './careers-form.service';
import { CareersFormRoutingModule } from './careers-form-routing.module';
import { FormPageComponent } from './form-page/form-page.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    FormPageComponent,
    FormSectionComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    CareersFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CareersFormService]
})
export class CareersFormModule { }
