import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [ DashboardTileComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [
    DashboardTileComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {

    const tileCE = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('dashboard-tile', tileCE);

  }
  ngDoBootstrap() {}
}

