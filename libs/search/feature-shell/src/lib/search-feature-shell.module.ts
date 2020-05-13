import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchShellComponent } from './search-shell/search-shell.component';
import { SharedUiModule } from '@the-new-datasite/shared/ui';
// import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    SharedUiModule,
    // RouterModule
  ],
  declarations: [SearchShellComponent],
  exports: [SearchShellComponent]
})
export class SearchFeatureShellModule {}
