import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DocumentsFeatureShellModule } from '@the-new-datasite/documents/feature-shell';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFeatureShellModule } from '@the-new-datasite/search/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DocumentsFeatureShellModule,
    SearchFeatureShellModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: []
})
export class AppModule {}
