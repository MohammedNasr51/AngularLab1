import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  let isLoggedIn = false;
  auth.isLoggedIn().subscribe((val) => isLoggedIn = val);
  if (!isLoggedIn) {
    router.navigateByUrl('/login');
    return false;
  }
  return isLoggedIn;
};
