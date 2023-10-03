import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // here, we nest the product component using the product-list component selector as a directive
  template:
    // '<div><h1>{{pageTitle}}</h1><app-products></app-products></div>',
    // while here, we route to the product-list component instead
    `<nav class="navbar navbar-expand navbar-light bg-light p-4">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav nav-pills">
          <li><a class="nav-link" routerLink="/welcome">Home</a></li>
          <li><a class="nav-link" routerLink="/products">Product List</a></li>
        </ul>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
