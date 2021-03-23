import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private translateService: TranslateService, private router: Router) {
    translateService.setDefaultLang('en');
  }

  changeLocale(locale: string) {
    this.translateService.use(locale)
  }

}
