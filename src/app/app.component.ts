/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { ToasterModule } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'ngx-app',
  template: `
  <toaster-container></toaster-container>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  private appName;
  private user: any;
  constructor(
    private analytics: AnalyticsService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.appName = 'Bookies';
    this.user = this.authService.getUserProfile();    
  }
}
