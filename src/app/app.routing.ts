import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
export const AppRouting: Routes = [
  {
    path: '',
    component: AppComponent,
    data: {
      title: 'Universal Angular App'
    }
  },
  {
    path: 'demo',
    component: DemoComponent,
    data: {
      title: 'Universal Angular Demo'
    }
  }
];

export const AppRoutingProviders: any[] = [
];
