import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// we are using this service to encapsulate the data access features and not share data since we do not have any defined properties. i.e managing the data away from individual components which makes it easier to modify and reuse this logic.
export class ProductService {
  //
  private productUrl = 'api/products/products.json';
  //Angular will inject the http client service instance into the variable(constructor params)
  constructor(private http: HttpClient) {}

  // this method returns an observable of IProduct array
  getProducts(): Observable<IProduct[]> {
    // we will call the http get method here. this method will automatically map the returned response to an array of products. we call the observable pipe method to specify a set of operators
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      // tap operator to access the admitted item(data) without modifying it
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  // in the method below, we handle logging our errors
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error ocurred, handle it accordingly
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful response code.
      // the response body may contain clue as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
