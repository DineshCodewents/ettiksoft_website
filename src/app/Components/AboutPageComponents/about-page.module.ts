import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutInnovationComponent } from './about-innovation/about-innovation.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CultureExplorationComponent } from './culture-exploration/culture-exploration.component';
import { FutureTransformSectionComponent } from './future-transform-section/future-transform-section.component';
import { LeadershipAndTeamComponent } from './leadership-and-team/leadership-and-team.component';
import { AboutScrollDirective } from './about-scroll.directive';


@NgModule({
  declarations: [
    AboutInnovationComponent,
    AboutPageComponent,
    CultureExplorationComponent,
    FutureTransformSectionComponent,
    LeadershipAndTeamComponent,
    AboutScrollDirective
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule { }
