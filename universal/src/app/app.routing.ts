import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

import { SeriesResolve } from './resolves/series.resolve';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';

export const AppRouting: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: {
      series: SeriesResolve
    }
  }
];

export const AppRoutingProviders: any[] = [];
