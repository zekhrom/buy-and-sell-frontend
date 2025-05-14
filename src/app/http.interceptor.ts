import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getAccessToken();
  // If no token, proceed with the original request
  const reqWithHeader = req.clone({
    headers: req.headers.set('authToken', token || ''),
  });
  return next(reqWithHeader);
};
