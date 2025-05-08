import { Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';

export const routes: Routes = [{
  path: 'listings',
  loadComponent: () => import('./listings-page/listings-page.component').then(m => m.ListingsPageComponent),
  pathMatch: 'full'
}, {
  path: '',
  redirectTo: 'listings',
  pathMatch: 'full'
}, {
  path: 'listings/:id',
  loadComponent: () => import('./listings-detail/listings-detail.component').then(m => m.ListingsDetailComponent),
}];
