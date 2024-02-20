import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersPageComponent } from './careers-page/careers-page.component';
import { ExploreOppurtunitiesComponent } from './explore-oppurtunities/explore-oppurtunities.component';
import { InnovativeTeamComponent } from './innovative-team/innovative-team.component';
import { CareersPageScrollDirective } from './careers-page-scroll.directive';
import { AddJobComponent } from './add-job/add-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CareersPageComponent,
    ExploreOppurtunitiesComponent,
    InnovativeTeamComponent,
    CareersPageScrollDirective,
    AddJobComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CareersModule { }
