import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsShellComponent } from './permissions-shell/permissions-shell.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PermissionsShellComponent],
  exports: [PermissionsShellComponent]
})
export class PermissionsFeatureShellModule {}
