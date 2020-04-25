import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedUiModule } from '@the-new-datasite/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'content',
            // component: ,
            pathMatch: 'full'
          }
        ]
      }
    ]),],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class DiligenceFeatureShellModule {}
