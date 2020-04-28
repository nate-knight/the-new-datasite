import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from '@the-new-datasite/diligence/feature-shell';
// import { DocumentsShellComponent } from '@the-new-datasite/documents/feature-shell';
import { DocumentsShellComponent } from '../../../../libs/documents/feature-shell/src/lib/documents-shell/documents-shell.component';
import { DiligenceFeatureShellModule } from '@the-new-datasite/diligence/feature-shell';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    
    // RouterModule.forRoot([
    //   { path: '', component: ShellComponent, pathMatch:'full' },
    // ], { initialNavigation: 'enabled' })

    // RouterModule.forRoot(
    //   [
    //     {
    //       path: '**',
    //       redirectTo: ''
    //     }
    //   ],
    //   { initialNavigation: 'enabled' }
    // ),
    // DiligenceFeatureShellModule
    // RouterModule.forRoot(
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
    // )

    // RouterModule.forRoot([
    //   { path: '', component: ShellComponent, pathMatch: 'full' },
    //   // { path: 'products/:productId', component: ProductDetailsComponent },
    // ])

    // DiligenceFeatureShellModule

    RouterModule.forRoot([
      { path: '', redirectTo: 'diligence', pathMatch: 'full'},
      { 
        path: 'diligence', 
        component: ShellComponent,
        children: [
          {path: '', redirectTo: 'content', pathMatch: 'full'},
          {
            path: 'content',
            component: DocumentsShellComponent
          }
        ]
      }
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
