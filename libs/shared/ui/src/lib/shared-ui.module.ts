import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TheFerrariTemplateComponent } from './product-templates/the-ferrari-template/the-ferrari-template.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { LightBulbComponent } from './light-bulb/light-bulb.component';
import { BrandingBarComponent } from './branding-bar/branding-bar.component';
import { CapabilitySchmapabilityTemplateComponent } from './capability-templates/capability-schmapability-template/capability-schmapability-template.component';
import { ExpansionPanelOneComponent } from './expansion-panel-one/expansion-panel-one.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { CapabilityTemplateFullWidthMainComponent } from './capability-templates/capability-template-full-width-main/capability-template-full-width-main.component';
import { WebComponentShellComponent } from './web-component-shell/web-component-shell.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [TheFerrariTemplateComponent, ProductHeaderComponent, LightBulbComponent, BrandingBarComponent, CapabilitySchmapabilityTemplateComponent, ExpansionPanelOneComponent, CapabilityTemplateFullWidthMainComponent, WebComponentShellComponent],
  exports: [
    TheFerrariTemplateComponent,
    ProductHeaderComponent, 
    LightBulbComponent, 
    CapabilitySchmapabilityTemplateComponent,
    CapabilityTemplateFullWidthMainComponent,
    ExpansionPanelOneComponent,
    WebComponentShellComponent]
})
export class SharedUiModule {}
