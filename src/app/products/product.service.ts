import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    // we will call the http get method here. this method will automatically map the returned response to an array of products
    return this.http.get<IProduct[]>(this.productUrl);
  }
}
