import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageDirective } from './product-page.directive';
import { LoadBoxComponent } from './LoadboxComponents/load-box/load-box.component';
import { LoadBoxTestingComponent } from './LoadboxComponents/load-box-testing/load-box-testing.component';
import { LoadBoxPageComponent } from './LoadboxComponents/load-box-page/load-box-page.component';
import { BreakoutBoxPageComponent } from './BreakoutBoxComponent/breakout-box-page/breakout-box-page.component';
import { BreakoutBoxComponent } from './BreakoutBoxComponent/breakout-box/breakout-box.component';
import { BreakoutBoxTestingComponent } from './BreakoutBoxComponent/breakout-box-testing/breakout-box-testing.component';
import { EmiWiringPageComponent } from './EMIWiringComponents/emi-wiring-page/emi-wiring-page.component';
import { EmiWiringComponent } from './EMIWiringComponents/emi-wiring/emi-wiring.component';
import { EmiWiringTestingComponent } from './EMIWiringComponents/emi-wiring-testing/emi-wiring-testing.component';
import { EvComponentsPageComponent } from './EVPageComponents/ev-components-page/ev-components-page.component';
import { EvComponentComponent } from './EVPageComponents/ev-component/ev-component.component';
import { EvComponentTestingComponent } from './EVPageComponents/ev-component-testing/ev-component-testing.component';
import { VariantSwitchPageComponent } from './VariantSwitchComponent/variant-switch-page/variant-switch-page.component';
import { VariantSwitchComponent } from './VariantSwitchComponent/variant-switch/variant-switch.component';
import { VariantSwitchTestingComponent } from './VariantSwitchComponent/variant-switch-testing/variant-switch-testing.component';
import { EnquireFormComponent } from './enquire-form/enquire-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductPageDirective,
    LoadBoxComponent,
    LoadBoxTestingComponent,
    LoadBoxPageComponent,
    BreakoutBoxPageComponent,
    BreakoutBoxComponent,
    BreakoutBoxTestingComponent,
    EmiWiringPageComponent,
    EmiWiringComponent,
    EmiWiringTestingComponent,
    EvComponentsPageComponent,
    EvComponentComponent,
    EvComponentTestingComponent,
    VariantSwitchPageComponent,
    VariantSwitchComponent,
    VariantSwitchTestingComponent,
    EnquireFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsPageModule { }
