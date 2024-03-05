import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'teacher';
  answer: string = '';
  genders: string[] = ['male', 'female'];
  suggestUserName(): void {
    const suggestedName: string = 'Superuser';
  }

  // onSubmit(form: NgForm): void {
  //   console.log(form);
  // }

  onSubmit(): void {
    console.log(this.signupForm);
  }
}
