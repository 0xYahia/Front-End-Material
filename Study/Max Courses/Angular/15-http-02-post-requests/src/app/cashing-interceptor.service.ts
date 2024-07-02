import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { CACHING_ENABLED } from "../environment/environment";
import { Observable } from "rxjs";

export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  console.log({ isCashing: req.context.get(CACHING_ENABLED) });
  if (req.context.get(CACHING_ENABLED)) {
    // apply caching logic
    return next(req);
  } else {
    // caching has been disabled for this request
    return next(req);
  }
}
