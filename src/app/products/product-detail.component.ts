import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  // the selector property is only required when the component will be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  // the property(product) has a type(IProduct) interface or undefined. undefined because we may not get the data immediately because of http and TS strong typing won't allow us initialise the property later(they may if we use definite assignment assertion though(product!) but we cannot go with this alternative since our data may take time to get)
  // the data is undefined until the data is received, then it'll be of IProduct data type
  product: IProduct | undefined;

  // reads the route parameter so it knows which product detail to display
  // the ActivatedRoute service provides info on the state of the current route, including the route params
  constructor(private route: ActivatedRoute) {}

  // the OnInit lifecycle hook function is executed when the component is initialized
  ngOnInit(): void {
    // since the parameter won't change when the component is displayed, we'll use the snapshot approach to read the params
    // we use the const keyword when declaring Id
    // we add the Number function so that the params('id') becomes a number data type
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // to see the Id we read from the Url, we display it as part of the pageTitle
    this.pageTitle = this.pageTitle + ` ${id}`;
    this.product = {
      productId: id,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2021',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png',
    };
  }
}
