/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';
import { AppRouting, AppRoutingProviders } from './app.routing';

import { AppComponent } from './index';
import { MainComponent } from './components/main.component';

import { SeriesResolve } from './resolves/series.resolve';
import { AUTO_PREBOOT } from 'angular2-universal';

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    UniversalModule,
    RouterModule.forRoot(AppRouting)
    /**
     * using routes
     */
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SeriesResolve,
    {
      provide: AUTO_PREBOOT,
      useValue: false
    }
  ]
})
export class AppModule {

}
