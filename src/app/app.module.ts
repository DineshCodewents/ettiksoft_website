import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroSectionComponent } from './Components/HomePageComponents/intro-section/intro-section.component';
import { SystemEngineeringPageComponent } from './Components/HomePageComponents/system-engineering-page/system-engineering-page.component';
import { OurLeadersSectionComponent } from './Components/HomePageComponents/our-leaders-section/our-leaders-section.component';
import { OurProductsSectionComponent } from './Components/HomePageComponents/our-products-section/our-products-section.component';
import { QuestionsSectionComponent } from './Components/HomePageComponents/questions-section/questions-section.component';
import { FooterComponent } from './Components/FooterComponent/footer/footer.component';
import { CompanyInfoComponent } from './Components/FooterComponent/company-info/company-info.component';
import { ContactComponent } from './Components/FooterComponent/contact/contact.component';
import { CompanyLinksComponent } from './Components/FooterComponent/company-links/company-links.component';
import { ProductsListComponent } from './Components/FooterComponent/products-list/products-list.component';
import { ServicesComponent } from './Components/FooterComponent/services/services.component';
import { EttiksoftMapSectionComponent } from './Components/HomePageComponents/ettiksoft-map-section/ettiksoft-map-section.component';
import { OurSpecialitySectionComponent } from './Components/HomePageComponents/our-speciality-section/our-speciality-section.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroSectionComponent,
    SystemEngineeringPageComponent,
    OurLeadersSectionComponent,
    OurProductsSectionComponent,
    QuestionsSectionComponent,
    FooterComponent,
    CompanyInfoComponent,
    ContactComponent,
    CompanyLinksComponent,
    ProductsListComponent,
    ServicesComponent,
    EttiksoftMapSectionComponent,
    OurSpecialitySectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
