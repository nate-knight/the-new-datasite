import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ShellComponent } from '@the-new-datasite/diligence/feature-shell';
import { DocumentsShellComponent } from '@the-new-datasite/documents/feature-shell';
import { PermissionsShellComponent } from '@the-new-datasite/permissions/feature-shell';
import { QaShellComponent } from '@the-new-datasite/qa/feature-shell';
import { SearchShellComponent } from '@the-new-datasite/search/feature-shell'
import { WebComponentShellComponent } from '@the-new-datasite/shared/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'diligence', pathMatch: 'full'},
      { 
        path: 'diligence', 
        component: ShellComponent,
        children: [
          {path: '', redirectTo: 'content', pathMatch: 'full'},
          {
            path: 'content',
            component: DocumentsShellComponent,
            // loadChildren: '@the-new-datasite/documents/feature-shell#DocumentsFeatureShellModule'
          },
          {
            path: 'permissions',
            component: PermissionsShellComponent
          },
          {
            path: 'qa',
            component: QaShellComponent
          },
          {
            path: 'search',
            component: SearchShellComponent
          },
          {
            path: 'search-v2',
            component: WebComponentShellComponent,
            data: { scriptSrc: 'assets/main-es2015.ee0afc9d727a30a1a6eb.js', selector: 'search-shell' }
          }
        ]
      }
    ]),
    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
