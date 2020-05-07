import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaShellComponent } from './qa-shell/qa-shell.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QaShellComponent],
  exports: [QaShellComponent]
})
export class QaFeatureShellModule {}
