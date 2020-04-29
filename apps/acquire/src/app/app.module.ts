import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//
import { ShellComponent } from '@the-new-datasite/acquire/feature-shell';
import { DocumentsShellComponent } from '@the-new-datasite/documents/feature-shell';
import { PermissionsShellComponent } from '@the-new-datasite/permissions/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' })
    RouterModule.forRoot([
      { path: '', redirectTo: 'acquire', pathMatch: 'full'},
      { 
        path: 'acquire', 
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
          }
        ]
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
