import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { productDetailGuard } from './product-detail.guard';

import { SharedModule } from '../shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { productEditGuard } from './product-edit.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductEditComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      // the CanActivate guard prevents navigation to he product-detail route if the id is 0 or NaN(not a number)
      {
        path: 'products/:id',
        // here we specify each guard we want to execute when activating the route
        canActivate: [productDetailGuard],
        component: ProductDetailComponent,
      },
      {
        path: 'products/:id/edit',
        canDeactivate: [productEditGuard],
        component: ProductEditComponent,
      },
    ]),
    // the product.module accesses the exports from the SharedModule
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
  ],
})
export class ProductModule {}
