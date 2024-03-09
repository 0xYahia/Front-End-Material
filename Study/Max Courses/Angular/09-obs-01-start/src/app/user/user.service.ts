import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // activatedEmit: EventEmitter<boolean> = new EventEmitter<boolean>;
  activatedEmit$: Subject<boolean> = new Subject<boolean>;
}
