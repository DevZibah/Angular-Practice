import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
// import { CanActivateFn } from '@angular/router';

// since the guard is a service, it needs to be registered with an angular injector
@Injectable({
  providedIn: 'root',
})

// export const productDetailGuard: CanActivateFn = (route, state) => {
//   return true;
// };
export class productDetailGuard implements CanActivate {
  // create a method that checks the route url and ensures that the id passed in is valid, if it's not, we want to navigate back to the product-list page
  constructor(private router: Router) {}

  // canActivate method can return an observable, promise or boolean value
  canActivate(
    // ActivatedRouteSnapshot parameter provides current route info
    route: ActivatedRouteSnapshot,
    // RouterStateSnapshot params to provide router state information.
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // get the parameter from the route
    const id = Number(route.paramMap.get('id'));
    // use if-statement to check the params. if the result is not a number, or the value is less than 1, we display an alert.
    if (isNaN(id) || id < 1) {
      // display an alert or create an error page in a real world application
      alert('Invalid product id');
      // activate a route with code. the code below means navigate to the product-list page if the id returns 0 or less than 1
      this.router.navigate(['/products']);
      // return false to let the router know to cancel activating the product-detail route
      return false;
    }
    // otherwise return true and continue with the product-detail page
    return true;
  }
}
