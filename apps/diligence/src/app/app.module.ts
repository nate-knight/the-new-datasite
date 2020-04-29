import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShellComponent } from '@the-new-datasite/diligence/feature-shell';
// import { DocumentsShellComponent } from '@the-new-datasite/documents/feature-shell';

import { DiligenceFeatureShellModule } from '@the-new-datasite/diligence/feature-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DocumentsShellComponent } from '../../../../libs/documents/feature-shell/src/lib/documents-shell/documents-shell.component';
import { DocumentsShellComponent } from '@the-new-datasite/documents/feature-shell';
import { PermissionsShellComponent } from '@the-new-datasite/permissions/feature-shell';
import {MatButtonModule } from '@angular/material/button';
// import { SharedThemingModule } from '@the-new-datasite/shared/theming';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // MatButtonModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'diligence', pathMatch: 'full'},
      { 
        path: 'diligence', 
        component: ShellComponent,
        children: [
          {path: '', redirectTo: 'permissions', pathMatch: 'full'},
          {
            path: 'content',
            component: DocumentsShellComponent,
            // loadChildren: '@the-new-datasite/documents/feature-shell#DocumentsFeatureShellModule'
          },
          {
            path: 'permissions',
            component: PermissionsShellComponent
          }
        ]
      }
    ]),
    
    BrowserAnimationsModule,
    // SharedThemingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
