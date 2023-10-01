import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
  // listFilter: string = 'cart';

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
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 3,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
    {
      productId: 4,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png',
    },
    {
      productId: 5,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2020',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png',
    },
  ];

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
  // OnInit method
  ngOnInit(): void {
    this._listFilter = 'cart';
  }
}
