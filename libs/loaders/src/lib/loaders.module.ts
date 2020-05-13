import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponentLoaderComponent } from './angular-component-loader/angular-component-loader.component';
import { SearchFeatureShellModule } from '@the-new-datasite/search/feature-shell';
import { WebComponentLoaderComponent } from './web-component-loader/web-component-loader.component';

@NgModule({
  imports: [CommonModule, 
    SearchFeatureShellModule],
  declarations: [AngularComponentLoaderComponent, WebComponentLoaderComponent],
  exports: [AngularComponentLoaderComponent]
})
export class LoadersModule {}
