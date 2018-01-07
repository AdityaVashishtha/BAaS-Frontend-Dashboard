import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastService } from '../../services/util/toast.service';
import { Router } from '@angular/router';


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

  constructor(
    protected authService:AuthService,
    private toastService:ToastService,
    private router: Router

  ) {    
   }

  ngOnInit() {
    if(this.authService.loggedIn()) {
      this.toastService.showToast(this.toastService.typeNum.info,"","User already logged in!!");
      this.router.navigate(['dashboard']);
    }
  }
  
  login() {
    this.submitted = true;
    let user = {
      username: this.username,
      password: this.password
    }
    this.authService.authenticateUser(user).subscribe(res => {      
      if(res.success) {          
        this.authService.storeUserData(res.data.token,res.data.user);
        this.toastService.showToast(this.toastService.typeNum.success,"","User succesfully logged in");
        this.router.navigate(['dashboard']);
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
