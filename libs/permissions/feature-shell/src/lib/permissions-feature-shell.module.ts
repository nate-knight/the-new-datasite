import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsShellComponent } from './permissions-shell/permissions-shell.component';
import { SharedUiModule } from '@the-new-datasite/shared/ui';

@NgModule({
  imports: [CommonModule, SharedUiModule],
  declarations: [PermissionsShellComponent],
  exports: [PermissionsShellComponent]
})
export class PermissionsFeatureShellModule {}
