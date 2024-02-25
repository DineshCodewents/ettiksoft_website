import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeAtEttiksoftRoutingModule } from './life-at-ettiksoft-routing.module';
import { CustomerTestimonialSectionComponent } from './customer-testimonial-section/customer-testimonial-section.component';
import { DynamicInnovativeSectionComponent } from './dynamic-innovative-section/dynamic-innovative-section.component';
import { EttiksoftWorkspaceComponent } from './ettiksoft-workspace/ettiksoft-workspace.component';
import { LifeAtEttiksoftComponent } from './life-at-ettiksoft/life-at-ettiksoft.component';
import { OurEnvironmentComponent } from './our-environment/our-environment.component';
import { OurInitiativesComponent } from './our-initiatives/our-initiatives.component';
import { OurWorkspaceImagesComponent } from './our-workspace-images/our-workspace-images.component';
import { LifeAtEttiksoftScrollDirective } from './life-at-ettiksoft-scroll.directive';


@NgModule({
  declarations: [
    CustomerTestimonialSectionComponent,
    DynamicInnovativeSectionComponent,
    EttiksoftWorkspaceComponent,
    LifeAtEttiksoftComponent,
    OurEnvironmentComponent,
    OurInitiativesComponent,
    OurWorkspaceImagesComponent,
    LifeAtEttiksoftScrollDirective,
  ],
  imports: [
    CommonModule,
    LifeAtEttiksoftRoutingModule
  ]
})
export class LifeAtEttiksoftModule { }
