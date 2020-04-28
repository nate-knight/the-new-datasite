import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsShellComponent } from './documents-shell/documents-shell.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DocumentsShellComponent],
  exports: [DocumentsShellComponent]
})
export class DocumentsFeatureShellModule {}
