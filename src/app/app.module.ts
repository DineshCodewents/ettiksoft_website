import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { EttiksoftChroniclesComponent } from './Components/HomePageComponents/ettiksoft-chronicles/ettiksoft-chronicles.component';
import { AboutPageComponent } from './Components/AboutPageComponents/about-page/about-page.component';
import { AboutPageModule } from './Components/AboutPageComponents/about-page.module';
import { HomePageComponent } from './Components/HomePageComponents/home-page/home-page.component';
import { NavBarComponent } from './Components/HomePageComponents/nav-bar/nav-bar.component';
import { LifeAtEttiksoftModule } from './Components/LifeAtEttiksoft/life-at-ettiksoft.module';
import { CareersModule } from './Components/CareersComponent/careers.module';
import { CareersFormModule } from './Components/CareersFormComponent/careers-form.module';
import { ContactUsModule } from './Components/ContactUsComponent/contact-us.module';
import { ProductsPageModule } from './Components/ProductspageComponents/products-page.module';
import { EttiksoftServiceModule } from './Components/ServicesComponents/ettiksoft-service.module';

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
    EttiksoftChroniclesComponent,
    HomePageComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutPageModule,
    LifeAtEttiksoftModule,
    CareersModule,
    CareersFormModule,
    ContactUsModule,
    ProductsPageModule,
    EttiksoftServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
