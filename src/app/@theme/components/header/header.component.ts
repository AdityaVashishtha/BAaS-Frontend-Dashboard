import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { AppDetailsService }  from '../../../@core/data/appDetails.service';

// Custom import
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../services/util/toast.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ConfigurationService } from '../../../services/dashboard/configuration.service';


@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {


  @Input() position = 'normal';

  user: any;    
  userMenu = [{ title: 'Profile' }, { title: 'Logout' }];

  /* Variable Declaration Mine - Aditya */
  private app: any;
  private subcription: Subscription;
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,              
              private configurationService: ConfigurationService,
              private router: Router,
              private authService: AuthService,
              private toastService: ToastService
            ) {  
              this.app = {};
  }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.eva);
    this.user = this.authService.getUserProfile();    
    this.user.avatar = "/assets/images/avatar/"+this.user.avatar+".png";
    this.configurationService.getApplicationDetails().subscribe(
      res => {        
        this.app = res.config;
      }
    );
    this.subcription = this.authService.userChangeEvent.subscribe(res=>{
        this.user = res;
        this.user.avatar = "/assets/images/avatar/"+this.user.avatar+".png";        
      });    
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
    if($event.title === "Logout") {
      this.authService.logout();
      this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!","Successfully logged out");
      this.router.navigate(['auth/login']);      
    } else if ($event.title === "Profile") {
      this.router.navigate(['dashboard/user-profile']);
    }
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
  
}
