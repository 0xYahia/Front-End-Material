import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

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
    if (this.isLoginMode) {
      return;
    } else {
      const email: string = form.value.email;
      const password: string = form.value.password;
      this.isLoading = true;
      this.authService.signup(email, password).subscribe(res => {
        console.log(res);
        this.isLoading = false;
      }, (error) => {
        console.log(error);
        this.error = 'An error occurred!';
        this.isLoading = false;
      }
      );
    }
    form.reset();
  }

}
