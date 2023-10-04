import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StarComponent],
  imports: [CommonModule],
  // we export the starcomponent to make its features accessible to the components declared in product.module
  // the CommonModule gives access to ngFor and ngIf directives
  exports: [CommonModule, FormsModule, StarComponent],
})
export class SharedModule {}
