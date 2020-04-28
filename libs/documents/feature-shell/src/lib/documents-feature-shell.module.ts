import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsShellComponent } from './documents-shell/documents-shell.component';
// import { SharedUiModule } from '@the-new-datasite/shared/ui';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule
  ],
  declarations: [DocumentsShellComponent],
  exports: [DocumentsShellComponent]
})
export class DocumentsFeatureShellModule {}
