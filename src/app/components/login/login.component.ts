import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastService } from '../../services/util/toast.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private submitted: boolean;
  private error: any;
  types: string[] = ['default', 'info', 'success', 'warning', 'error'];

  constructor(protected authService:AuthService, private toastService:ToastService) {    
   }

  ngOnInit() {
    this.error = {
      isError: false
    }
  }
  
  login() {
    this.submitted = true;
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(res => {     
      if(this.authService.loggedIn()) {
        console.log("Logged IN");
      }
      if(res.success) {          
        this.authService.storeUserData(res.data.token,res.data.user);
        this.toastService.showToast(this.toastService.typeNum.success,"","User succesfully logged in");        
      } else {
        this.submitted = false;
        this.toastService.showToast(this.toastService.typeNum.warning,"",res.message);
        this.error = {
          isError: true,
          msg: res.message
        }
      }
    });    
  }

  getConfigValue(key: string) {
    console.log("Get configLogin Submited");
  }
}
