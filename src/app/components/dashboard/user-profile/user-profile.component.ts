import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/util/toast.service';
import { ConfigurationService } from '../../../services/dashboard/configuration.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private user;
  private password = {      
    newPassword: '',
    oldPassword: '',
  };
  private error = false;

  private changePasswordToggle = false;
  constructor(
    private toastService: ToastService,
    private applicationConfigService: ConfigurationService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.user = this.authService.getUserProfile();
    let lastSignedInDate = new Date(this.user.lastSignedIn);
    this.user.lastSignedIn = lastSignedInDate.toTimeString().toString() + " " + lastSignedInDate.toDateString().toString() ;    
    console.log(this.user);
  }

  saveProfile() {
    let updateQuery = {
      username: this.user.username,
      displayName: this.user.displayName      
    }
    console.log(updateQuery);
  }

  changePassword() {
    if(
      (this.password.newPassword.length >= 4 && this.password.newPassword.length <= 16)
     ) {
      this.error = false;
      let updateQuery = {
        id: this.user._id,
        username: this.user.username,
        oldPassword: this.password.oldPassword,
        newPassword: this.password.newPassword,
      } 
      this.authService.changePassword(updateQuery).subscribe(res=>{
        if(res.success) {
          this.toastService.showToast(this.toastService.typeNum.success,"Hurray!!",res.message);
        } else {
          this.toastService.showToast(this.toastService.typeNum.error,"Oops!!",res.message);
        }
      });
    } else {
      this.error = true;
    }
  }
}
