import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../services/util/toast.service';
import { ConfigurationService } from '../../../services/dashboard/configuration.service';
import { AuthService } from '../../../services/auth/auth.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  private numbers: any[];

  private changePasswordToggle = false;
  constructor(
    private toastService: ToastService,
    private applicationConfigService: ConfigurationService,
    private authService: AuthService,
    private modalService: NgbModal
  ) { 
    this.numbers = Array(36).fill(0,0,36).map((x,i)=>i); // Array(36).fill().map((x,i)=>i);
    console.log(this.numbers);
  }

  ngOnInit() {
    this.user = this.authService.getUserProfile();    
    let lastSignedInDate = new Date(this.user.lastSignedIn);
    this.user.lastSignedIn = lastSignedInDate.toTimeString().toString() + " " + lastSignedInDate.toDateString().toString() ;    
    //console.log(this.user);
  }

  setAvatar(avatar) {
    this.user.avatar = avatar;
  }

  saveProfile() {
    let updateQuery = {      
      displayName: this.user.displayName,
      avatar: this.user.avatar
    }
    if(updateQuery.displayName.length > 0) {
      this.authService.updateProfile(updateQuery).subscribe(res=>{
        if(res.success) {
          this.toastService.showToast(this.toastService.typeNum.info,"",res.message);          
        } else {
          this.toastService.showToast(this.toastService.typeNum.warning,"",res.message);
        }
      });
    } else {
      //TODO Add Proper message
      this.toastService.showToast(this.toastService.typeNum.warning,"","Display name is required");
    }
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

  openAvatarSelectBox(content) {
    this.modalService.open(content,{size: 'lg'}).result.then((result) => {
      this.user.avatar = parseInt(result) ? result : 0;
    }, (reason) => {
      let closeResult = `Dismissed ${reason}`;
    });
  }
}
