import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName(): void {
    const suggestedName: string = 'Superuser';
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }
}