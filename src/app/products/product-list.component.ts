import { Component } from '@angular/core';

// component decorator defines our metadata
@Component({
  selector: 'app-products',
// template defining our view layout
  templateUrl: './product-list.component.html',
})
// class defining our associated code
export class ProductListComponent {
  title = 'Acme Product Management';
}
