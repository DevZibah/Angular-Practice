import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

// component decorator defines our metadata
@Component({
  selector: 'app-products',
  // template defining our view layout
  templateUrl: './product-list.component.html',
  // linking the external style sheet. we can add more stylesheet urls separated with comma
  styleUrls: ['./product-list.component.css'],
})
// class defining our associated code. we implement the OnInit lifecycle hook interface and the onDestroy lifecycle hook to unsubscribe 
export class ProductListComponent implements OnInit, OnDestroy{
  pageTitle: string = 'Product List';
  //  using property binding to set the image size
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  // to handle errors from a http request
  errorMessage: string = '';
  // declare a var for the subscription. so, sub is of the data type: subscription or undefined. the exclamation mark (sub!) means that we're telling Typescript that we will assign the var (sub) a value later.
  sub!: Subscription;

  // build a getter and setter by declaring a private backing variable to hold the value managed by the getter and setter. _ denotes that it's a private var
  private _listFilter: string = '';

  // define a getter
  get listFilter(): string {
    return this._listFilter;
  }
  // the setter has a single parameter which is the value assigned to the property. the setter has no return value. the body of the setter performs a function anytime the property is changed
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    // performFilter is the method to perform filtering
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  //   define product as an array of 'any' data type. IProduct reps an interface data type
  products: IProduct[] = [];

  // the constructor function is executed when the component is created. it is primarily used for initialization and not for code that has side effects or takes time to execute.
  // we use the shorthand syntax(which works with public and protected) to define the ProductService dependency injector
  constructor(private productService: ProductService) {}

  // the performFilter method
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  //   methods or functions are placed below properties
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  // OnInit method performs component initialization.
  ngOnInit(): void {
    // we set the products property to the products returned from the ProductService
    // we subscribe to the returned observable, calling the subscribe method and passing an observer object
    // we assign the var (sub) to the subscription returned when calling a subscribed method
    this.sub = this.productService.getProducts().subscribe({
      // the observer object provides functions below for responding to our three notifications(next,error,complete)
      // the next function specifies what we want to do when the observable emits the next value
      // when the array of products is returned as a response, we want to assign our local products var to the returned array of products
      next: (products) => {
        this.products = products;
        // in order to not bind to the filtered products property, so that when the application is initialized, we set the filteredProducts property the full list of products.
        this.filteredProducts = this.products;
      },
      // we use the error notification to define what to do if the observable emits an error
      error: (err) => (this.errorMessage = err),
    });
  }

  // we define this method because it is required by the lifecycle hook. we use the sub var to call unsubscribe
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    // replace the pageTitle property with the data in the message parameter gotten from the nested component.
    this.pageTitle = 'Product List: ' + message;
  }
}
