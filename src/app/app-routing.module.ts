import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './Components/AboutPageComponents/about-page/about-page.component';
import { HomePageComponent } from './Components/HomePageComponents/home-page/home-page.component';
import { LifeAtEttiksoftComponent } from './Components/LifeAtEttiksoft/life-at-ettiksoft/life-at-ettiksoft.component';
import { ContactUsPageComponent } from './Components/ContactUsComponent/contact-us-page/contact-us-page.component';
import { CareersPageComponent } from './Components/CareersComponent/careers-page/careers-page.component';
import { FormPageComponent } from './Components/CareersFormComponent/form-page/form-page.component';
import { EvComponentsPageComponent } from './Components/ProductspageComponents/EVPageComponents/ev-components-page/ev-components-page.component';
import { LoadBoxPageComponent } from './Components/ProductspageComponents/LoadboxComponents/load-box-page/load-box-page.component';
import { VariantSwitchPageComponent } from './Components/ProductspageComponents/VariantSwitchComponent/variant-switch-page/variant-switch-page.component';
import { BreakoutBoxPageComponent } from './Components/ProductspageComponents/BreakoutBoxComponent/breakout-box-page/breakout-box-page.component';
import { EmiWiringPageComponent } from './Components/ProductspageComponents/EMIWiringComponents/emi-wiring-page/emi-wiring-page.component';
import { IotSolutionPageComponent } from './Components/ServicesComponents/IotSolutionsComponents/iot-solution-page/iot-solution-page.component';
import { MobilityEngineeringPageComponent } from './Components/ServicesComponents/MobilityEngineeringComponents/mobility-engineering-page/mobility-engineering-page.component';
import { AnimationComponent } from './Components/CarAnimationSection/animation/animation.component';
import { CarAnimationComponent } from './Components/CarAnimationSection/car-animation/car-animation.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about-page',component:AboutPageComponent},
  {path:'life-at-ettiksoft',component:LifeAtEttiksoftComponent},
  {path:'contact-us',component:ContactUsPageComponent},
  {path:'careers-page',component:CareersPageComponent},
  {path:'careers-form',component:FormPageComponent},
  {path:'break-out-box',component:BreakoutBoxPageComponent},
  {path:'emi-wiring',component:EmiWiringPageComponent},
  {path:'ev-page',component:EvComponentsPageComponent},
  {path:'load-box',component:LoadBoxPageComponent},
  {path:'variant-switch',component:VariantSwitchPageComponent},
  {path:'iot-solution-page',component:IotSolutionPageComponent},
  {path:'mobility-engineering-page',component:MobilityEngineeringPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
