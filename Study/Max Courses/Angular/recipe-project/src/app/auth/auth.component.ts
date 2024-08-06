import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from "../shared/placeholder.directive";

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: null | string = null;
  @ViewChild('appPlaceholder') alertHost: PlaceHolderDirective;
  closeSub: Subscription;


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
    authObs?.subscribe(res => {
      console.log(res);
      this.isLoading = false;
    }, (errorMessage) => {
      console.log(errorMessage);
      this.error = errorMessage;
      // this.showErrorAlert(errorMessage);
      this.isLoading = false;
    }
    );
    form.reset();
  }

  onHandleError(): void {
    this.error = null;
  }

  //! Old Way
  // showErrorAlert(message: string): void {
  //   //! this work in JS not in angular
  //   // const alertCmp:AlertComponent = new AlertComponent();
  //   //! this work with angular after angular 13
  //   const alertCmpFactory: any = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
  //   const hostViewContainerRef: ViewContainerRef = this.alertHost?.viewContainerRef;
  //   hostViewContainerRef.clear();

  //   const componentRef: any = hostViewContainerRef.createComponent(alertCmpFactory);

  //   componentRef.instance.message = message;

  //   this.closeSub = componentRef.instance.close.subscribe(() => {
  //     this.closeSub.unsubscribe;
  //     hostViewContainerRef.clear();
  //   });
  // }

  // showErrorAlert(message: string): void {
  //   const hostViewContainerRef: ViewContainerRef = this?.alertHost?.viewContainerRef;
  //   hostViewContainerRef?.clear();
  //   const componentRef: ComponentRef<AlertComponent> = hostViewContainerRef?.createComponent(AlertComponent);
  //   componentRef.instance.message = message;

  //   this.closeSub = componentRef.instance.close.subscribe(() => {
  //     this.closeSub.unsubscribe;
  //     hostViewContainerRef?.clear();
  //   });
  // }

  ngOnDestroy(): void {
    this.closeSub.unsubscribe();
  }
}
