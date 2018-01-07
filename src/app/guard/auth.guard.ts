import { Injectable } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { ToastService } from '../services/util/toast.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
        private toastService: ToastService
    ) {

    }
    canActivate() {
        let isMatch = this.authService.loggedIn();
        if(isMatch) {
            return true;
        } else {
            this.toastService.showToast(this.toastService.typeNum.warning,"Oops !!","Please login first");
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}