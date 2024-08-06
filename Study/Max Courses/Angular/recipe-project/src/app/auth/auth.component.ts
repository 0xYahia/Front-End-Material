import { Component, ComponentFactoryResolver } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: null | string = null;


  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  switchToSignUp(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const email: string = form.value.email;
    const password: string = form.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
      this.router.navigate(['./recipes']);
    } else {
      authObs = this.authService.signup(email, password);
      this.router.navigate(['./recipes']);
    }
    authObs.subscribe(res => {
      console.log(res);
      this.isLoading = false;
    }, (errorMessage) => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.showErrorAlert(errorMessage);
      this.isLoading = false;
    }
    );
    form.reset();
  }

  onHandleError(): void {
    this.error = null;
  }

  showErrorAlert(message: string): void {
    //! this work in JS not in angular
    // const alertCmp:AlertComponent = new AlertComponent();
    //! this work with angular after angular 13
    this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  }

}
