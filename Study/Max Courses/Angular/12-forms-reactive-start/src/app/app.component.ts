import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm: FormGroup;
  forbiddenUsernames = ['Yahia', 'Mohamed'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.signupForm.setValue({
      'userData': {
        'username': 'Yahia',
        'email': 'Yahia@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'Yahia 2',
      },
    });
  }
  onSumit(): void {
    console.log(this.signupForm);
    this.signupForm.reset({
      'gender': 'male',
    });
  }

  onAddHobby(): void {
    const control: FormControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get controls(): AbstractControl[] {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<null | { 'forbiddenEmail': boolean }> | Observable<null | { 'forbiddenEmail': boolean }> {
    const promise: Promise<null | { 'forbiddenEmail': boolean }> = new Promise<null | { 'forbiddenEmail': boolean }>((resolve) => {
      setTimeout(() => {
        if (control.value === 'mohamedyahia831@gmail.com') {
          resolve({ 'forbiddenEmail': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
