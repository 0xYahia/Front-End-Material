import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }

  //! The first way
  // canActivateFn(): CanActivateFn  {
  //   return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  //     return this.authService.authenticated().then((authenticated: boolean) => {
  //       if (authenticated) {
  //         return true;
  //       } else {
  //         this.router.navigate(['/']);
  //         return false;
  //       }
  //     });
  //   };
  // };

  //! The second way
  // canActivateFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  //   return this.authService.authenticated().then((authenticated: boolean) => {
  //     if (authenticated) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //   });
  // };

  //! The Third way

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.authenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
}
