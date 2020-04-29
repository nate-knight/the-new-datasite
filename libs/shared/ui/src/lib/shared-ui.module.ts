import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TheFerrariTemplateComponent } from './product-templates/the-ferrari-template/the-ferrari-template.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { LightBulbComponent } from './light-bulb/light-bulb.component';
import { BrandingBarComponent } from './branding-bar/branding-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  declarations: [TheFerrariTemplateComponent, ProductHeaderComponent, LightBulbComponent, BrandingBarComponent],
  exports: [TheFerrariTemplateComponent, ProductHeaderComponent, LightBulbComponent]
})
export class SharedUiModule {}
