import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  private configurations: any;  
  private loginViaOptions = ['username','email'];

  constructor() { }

  ngOnInit() {
    this.configurations = {
      signInOptions: {
        loginVia: 'email',
        verifyWithEmail: true,
        loginWithGoogle: false,
        loginWithFacebook: false,
      },
      
    }
  }

  saveConfigurations(){
    console.log(this.configurations)
  }

}
