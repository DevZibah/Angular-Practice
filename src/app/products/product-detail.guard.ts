import { CanActivateFn } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
  return true;
};
