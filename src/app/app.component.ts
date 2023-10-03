import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div><h1>{{pageTitle}}</h1><app-products></app-products></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
