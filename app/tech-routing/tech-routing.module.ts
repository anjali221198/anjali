import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReviewComponent } from '../review/review.component';
import { MdRegistrationComponent } from '../md-registration/md-registration.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { TdRegistrationComponent } from '../td-registration/td-registration.component';
import { DotnetComponent } from '../dotnet/dotnet.component';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'review', component: ReviewComponent },
  { path: 'md-registration', component: MdRegistrationComponent },
  {
    path: 'technologies', component: TechnologiesComponent ,
  children: [
      { path: 'java', component: JavaComponent },
      { path: 'web', component: WebComponent },
      { path: 'dotnet', component: DotnetComponent },

    ],
  },
  { path: 'td-registration', component: TdRegistrationComponent }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule

  ],
  exports:[RouterModule]

})
export class TechRoutingModule { }
export const routingComponents = [HomeComponent, ReviewComponent,TdRegistrationComponent,MdRegistrationComponent,TechnologiesComponent,JavaComponent,WebComponent,DotnetComponent,LoginComponent]
