import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const responsesInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap((req) =>
      req.type === HttpEventType.Response ? console.log('url', req.url) : null
    )
  );
};
