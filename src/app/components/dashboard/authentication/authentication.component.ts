import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../../services/dashboard/configuration.service';
import { ToastService } from '../../../services/util/toast.service';



@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  private configurations: any;  
  private primaryLoginOptions = ['email','username'];
  private unlockEdit:boolean = false;
  constructor(
    private configurationService: ConfigurationService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.configurations = {
      signInOptions: {
        primaryLogin: 'email',
        allowLoginAsGuest: false,
        verifyWithEmail: false,
        googleLoginOption: {
          isEnabled: false,          
          clientID: '',
          clientSecrete:'',          
        },
        facebookLoginOption: {
          isEnabled: false,
          clientID: '',
          clientSecrete:'',          
        },
        redirectUrl: ''        
      },      
    }
    this.configurationService.getAuthenticationConfig().subscribe(res=>{
      console.log(res)
        if(res.success) {          
          this.configurations = res.data.config;
        } else {
          this.configurations = {signInOptions : {}}          
        }
    });
  }

  

  saveConfigurations(){
    this.configurationService.setAuthenticationConfig(this.configurations).subscribe(res=>{
      if(res.success) {
        this.toastService.showToast(this.toastService.typeNum.success,"Hurray!",res.message);
      } else {
        this.toastService.showToast(this.toastService.typeNum.error,"Oops!",res.message);
      }
    });
  }

}
