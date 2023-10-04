import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { productDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
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
    ]),
    // the product.module accesses the exports from the SharedModule
    SharedModule,
  ],
})
export class ProductModule {}
