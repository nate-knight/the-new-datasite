import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheFerrariTemplateComponent } from './product-templates/the-ferrari-template/the-ferrari-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TheFerrariTemplateComponent],
  exports: [TheFerrariTemplateComponent]
})
export class SharedUiModule {}
