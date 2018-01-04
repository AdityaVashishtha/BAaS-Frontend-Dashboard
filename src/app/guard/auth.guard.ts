import { Injectable } from '@angular/core';
import { HttpModule, Headers } from '@angular/http';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate() {
        let isMatch = true;
        if(isMatch) {
            return true;
        } else {
            this.router.navigate(['/auth/login']);
            return false;
        }
    }
}