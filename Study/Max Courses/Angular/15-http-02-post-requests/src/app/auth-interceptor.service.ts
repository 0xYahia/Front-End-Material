import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

//! Old way of creating an interceptor
// export class AuthInterceptorService implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log('Request is on its way');
//     return next.handle(req)
//   }
// }

//! New way of creating an interceptor
export const AuthInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): any => {
  console.log('Request is on its way');
  const modifiedRequest = req.clone({
    headers: req.headers.append('Auth', 'xyz')
  });
  return next(modifiedRequest);
}

