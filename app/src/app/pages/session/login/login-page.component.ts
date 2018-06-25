import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { HavenSDK } from '../../../shared/services/haven/haven-sdk';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f') loginForm: NgForm;

    submitting: boolean;
    message: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private sdk: HavenSDK) { }

    // On submit button click    
    onSubmit() {
        const signinData = this.loginForm.value
        const input = {
            user: signinData.inputEmailAddress,
            password: signinData.inputPass,
            perist: signinData.rememberMe,
        };
        this.submitting = true;
        this.message = '';
        this.sdk.Auth.loginAsync(input).subscribe(data => {
            if (data.success) {
                this.sdk.setAccount(data.item);
                this.message = "logged in!";// hack for demo only
                this.router.navigate(['']);
            } else {
                this.submitting = false;
                this.message = data.message;
                //this.alertService.error({ message: data.message });
            }
        }, error => {
            this.submitting = false;
            this.message = 'invalid!';
            //this.alertService.error({ message: error });
        });
    }
    // On Forgot password link click
    onForgotPassword() {
        //this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        //this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}