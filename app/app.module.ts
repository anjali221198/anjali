import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { TdRegistrationComponent } from './td-registration/td-registration.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MdRegistrationComponent } from './md-registration/md-registration.component';
import { TechRoutingModule } from './tech-routing/tech-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { DotnetComponent } from './dotnet/dotnet.component';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
//import { LoginComponent } from './login/login.component
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    TdRegistrationComponent,
    TechnologiesComponent,
    MdRegistrationComponent,
    JavaComponent,
    WebComponent,
    DotnetComponent,
    FooterComponent,
    SearchPipe,
    SortPipe,
    LoginComponent,
    HeaderComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, TechRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, HttpClientModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
