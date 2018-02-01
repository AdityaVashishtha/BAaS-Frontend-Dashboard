import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AppDetailsService }  from '../../../@core/data/appDetails.service';

// Custom import
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/util/toast.service';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;  
  userProfile: any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  /* Variable Declaration Mine - Aditya */
  private app: any;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private appDetailsService: AppDetailsService,
              private router: Router,
              private authService: AuthService,
              private toastService: ToastService
            ) {
                this.app = appDetailsService.getAppDetails();
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.eva);
    this.userProfile = this.authService.getUserProfile();    
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();    
  }
  
  onMenuClick($event) {    
    if($event.title === "Log out") {
      this.authService.logout();
      this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!","Successfully logged out");
      this.router.navigate(['auth/login']);      
    }
  }
  
}
