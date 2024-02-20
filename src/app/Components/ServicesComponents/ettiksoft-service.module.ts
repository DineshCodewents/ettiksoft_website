import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EttiksoftServiceRoutingModule } from './ettiksoft-service-routing.module';
import { DrivingInnovationComponent } from './IotSolutionsComponents/driving-innovation/driving-innovation.component';
import { ExcelInVersatileComponent } from './IotSolutionsComponents/excel-in-versatile/excel-in-versatile.component';
import { IotSolutionPageComponent } from './IotSolutionsComponents/iot-solution-page/iot-solution-page.component';
import { MesSolutionComponent } from './IotSolutionsComponents/mes-solution/mes-solution.component';
import { EttiksoftServiceScrollDirective } from './ettiksoft-service-scroll.directive';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { MobilityEngineeringPageComponent } from './MobilityEngineeringComponents/mobility-engineering-page/mobility-engineering-page.component';
import { MobilityServiceComponent } from './MobilityEngineeringComponents/mobility-service/mobility-service.component';
import { ElectronicHvMechanicalComponent } from './MobilityEngineeringComponents/electronic-hv-mechanical/electronic-hv-mechanical.component';


@NgModule({
  declarations: [
    DrivingInnovationComponent,
    ExcelInVersatileComponent,
    IotSolutionPageComponent,
    MesSolutionComponent,
    EttiksoftServiceScrollDirective,
    EnquiryFormComponent,
    MobilityEngineeringPageComponent,
    MobilityServiceComponent,
    ElectronicHvMechanicalComponent
  ],
  imports: [
    CommonModule,
    EttiksoftServiceRoutingModule
  ]
})
export class EttiksoftServiceModule { }
