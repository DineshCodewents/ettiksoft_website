import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroSectionComponent } from './Components/HomePageComponents/intro-section/intro-section.component';

const routes: Routes = [
  {path:'',component:IntroSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
