import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { SharedUiModule } from '@the-new-datasite/shared/ui';

@NgModule({
  imports: [CommonModule, SharedUiModule],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class DiligenceFeatureShellModule {}
