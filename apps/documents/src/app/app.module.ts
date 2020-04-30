import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentsFeatureShellModule } from '@the-new-datasite/documents/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DocumentsFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
