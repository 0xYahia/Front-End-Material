import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../11-dependency-injection/src/app/data';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{user.id}}</p>
    <p>{{user.name}}</p>
  `,
  styles: ``
})
export class UserInfoComponent {

  @Input() user: User = {
    id: -1,
    name: 'test',
    username: 'test',
    email: 'test',
    address: {
      street: 'test',
      suite: 'test',
      city: 'test',
      zipcode: 'test',
      geo: {
        lat: '156456',
        lng: '16516'
      },
    },
    phone: '1561',
    website: 'test',
    company: {
      name: 'test',
      catchPhrase: 'test',
      bs: 'test'
    }

  }

}
