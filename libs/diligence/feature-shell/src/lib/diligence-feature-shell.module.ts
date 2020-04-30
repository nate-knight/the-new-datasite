import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedUiModule } from '@the-new-datasite/shared/ui';
// import { DocumentsShellComponent } from '@the-new-datasite/documents/documents-feature-shell';
import { DocumentsShellComponent } from '../../../../documents/feature-shell/src/lib/documents-shell/documents-shell.component';
// import { ShellComponent } from '@the-new-datasite/diligence/feature-shell';
@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule,
    
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class DiligenceFeatureShellModule {}
