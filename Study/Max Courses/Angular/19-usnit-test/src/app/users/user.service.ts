import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: { name: string } = { name: 'Yahia' };
}
