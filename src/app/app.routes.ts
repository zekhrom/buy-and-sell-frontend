import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'listings',
    loadComponent: () =>
      import('./listings-page/listings-page.component').then(
        (m) => m.ListingsPageComponent
      ),
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'listings',
    pathMatch: 'full',
  },
  {
    path: 'listings/:id',
    loadComponent: () =>
      import('./listings-detail/listings-detail.component').then(
        (m) => m.ListingsDetailComponent
      ),
  },
  {
    path: 'my-listings',
    loadComponent: () =>
      import('./my-listings/my-listings.component').then(
        (m) => m.MyListingsComponent
      ),
  },
  {
    path: 'new-listing',
    loadComponent: () =>
      import('./new-listing/new-listing.component').then(
        (m) => m.NewListingComponent
      ),
  },
  {
    path: 'edit-listing/:id',
    loadComponent: () =>
      import('./new-listing/new-listing.component').then(
        (m) => m.NewListingComponent
      ),
  },
  {
    path: 'add-listing',
    loadComponent: () =>
      import('./new-listing/new-listing.component').then(
        (m) => m.NewListingComponent
      ),
  },
];
