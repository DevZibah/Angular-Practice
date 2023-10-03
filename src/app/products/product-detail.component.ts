import { Component, OnInit } from '@angular/core';

@Component({
  // the selector property is only required when the component will be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor() {}

  ngOnInit(): void {}
}
