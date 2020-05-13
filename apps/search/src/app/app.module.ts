import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { SearchShellComponent } from '@the-new-datasite/search/feature-shell'
import {createCustomElement} from '@angular/elements';

@NgModule({
  imports: [BrowserModule],
  entryComponents: [SearchShellComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const custom = createCustomElement(SearchShellComponent, {injector: this.injector});
    customElements.define('search-shell', custom);
  }
  ngDoBootstrap() {}
}
