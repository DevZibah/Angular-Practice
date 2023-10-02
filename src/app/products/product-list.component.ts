import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

// component decorator defines our metadata
@Component({
  selector: 'app-products',
  // template defining our view layout
  templateUrl: './product-list.component.html',
  // linking the external style sheet. we can add more stylesheet urls separated with comma
  styleUrls: ['./product-list.component.css'],
})
// class defining our associated code. we implement the OnInit lifecycle hook interface
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  //  using property binding to set the image size
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

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
    this.products = this.productService.getProducts();

    // in order to not bind to the filtered products property, so that when the application is initialized, we set the filteredProducts property the full list of products.
    this.filteredProducts = this.products

    // this._listFilter = 'cart';
  }

  onRatingClicked(message: string): void {
    // replace the pageTitle property with the data in the message parameter gotten from the nested component.
    this.pageTitle = 'Product List: ' + message;
  }
}
