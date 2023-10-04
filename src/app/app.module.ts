import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

@NgModule({
  // used for declaring components, directives and pipes that belongs to this module
  declarations: [AppComponent, WelcomeComponent],
  // for pulling in external modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // passing an array of routes
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      // default route
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // display a PageNotFound page
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
