import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheFerrariTemplateComponent } from './product-templates/the-ferrari-template/the-ferrari-template.component';
import { ProductHeaderComponent } from './product-header/product-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TheFerrariTemplateComponent, ProductHeaderComponent],
  exports: [TheFerrariTemplateComponent, ProductHeaderComponent]
})
export class SharedUiModule {}
