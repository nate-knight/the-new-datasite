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
    // RouterModule.forChild([
    //   {
    //     // path: '',
    //     // component: ShellComponent,
    //     // children: [
    //       // {
    //         path: '',
    //         component: DocumentsShellComponent,
    //         pathMatch: 'full',
    //         // loadChildren: '@the-new-datasite/documents-shell-component#DocumentsFeatureShellModule'
    //         loadChildren: () => import(DocumentsFeatureShellModule).then(m => m.ItemsModule)
    //       // }
    //     // ]
    //   }
    // ]),

    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: ShellComponent,
    //     // pathMatch: 'full',
    //     children: [
    //       {
    //         path: '/content',
    //         component: DocumentsShellComponent,
    //         pathMatch: 'full'
    //       }
    //     ]
    //   }
    // ]),

    // RouterModule.forChild(
    //   [
    //     {
    //       path: '',
    //       component: ShellComponent,
    //       pathMatch: 'full',
    //       children: [
    //         {
    //           path: 'content',
    //           component: DocumentsShellComponent,
    //           pathMatch: 'full'
    //         }
    //       ],
          
    //     },
    //   ],
    //   // { initialNavigation: 'enabled' }
    // )
    // RouterModule.forRoot([
    //   { 
    //     path: '', 
    //     component: ShellComponent, 
    //     pathMatch: 'full',
    //     // children: [
    //     //   {
    //     //     path: 'content',
    //     //     component: DocumentsShellComponent,
    //     //     pathMatch: 'full'
    //     //   }
    //     // ]
    //   },
    //   // { path: 'products/:productId', component: ProductDetailsComponent },
    // ]),
    // RouterModule.forChild([
    //   { 
    //     // path: '', 
    //     // component: ShellComponent, 
    //     // pathMatch: 'full',
    //     children: [
    //       {path: '', redirectTo: 'content'},
    //       {
    //         path: 'content',
    //         component: DocumentsShellComponent,
    //         pathMatch: 'full'
    //       }
    //     ]
    //   },
    //   // { path: 'products/:productId', component: ProductDetailsComponent },
    // ])
  ],
  declarations: [ShellComponent],
  // entryComponents: [ShellComponent],
  exports: [ShellComponent]
})
export class DiligenceFeatureShellModule {}
