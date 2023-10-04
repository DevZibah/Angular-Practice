import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // the selector property is only required when the component will be nested
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  // reads the route parameter so it knows which product detail to display
  // the ActivatedRoute service provides info on the state of the current route, including the route params
  constructor(private route: ActivatedRoute) {}

  // the OnInit lifecycle hook function is executed when the component is initialized
  ngOnInit(): void {

  }
}
