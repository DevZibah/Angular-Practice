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
    // since the parameter won't change when the component is displayed, we'll use the snapshot approach to read the params
    // we use the const keyword when declaring Id
    // we add the Number function so that the params('id') becomes a number data type
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // to see the Id we read from the Url, we display it as part of the pageTitle
    this.pageTitle = this.pageTitle + `: ${id}`;
  }
}
