import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheFerrariTemplateComponent } from './product-templates/the-ferrari-template/the-ferrari-template.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: [TheFerrariTemplateComponent, ProductHeaderComponent],
  exports: [TheFerrariTemplateComponent, ProductHeaderComponent]
})
export class SharedUiModule {}
