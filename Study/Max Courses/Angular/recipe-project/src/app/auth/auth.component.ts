import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'auth-app',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: null | string = null;

  constructor(private authService: AuthService) { }

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
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(res => {
      console.log(res);
      this.isLoading = false;
    }, (errorMessage) => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.isLoading = false;
    }
    );
    form.reset();
  }

}
