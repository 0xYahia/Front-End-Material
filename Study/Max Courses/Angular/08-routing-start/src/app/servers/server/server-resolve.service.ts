import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

import { ServersService } from "../servers.service";

interface Server {
  id: number;
  name: string;
  status: string
}

@Injectable()
export class ResolverService implements Resolve<Server> {
  constructor(private serverService: ServersService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
    return this.serverService.getServer(+route.params['id']);
  }

}
