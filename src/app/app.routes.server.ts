import { RenderMode, ServerRoute } from '@angular/ssr';

const mockRouteIDs = ['1', '2', '3', '4'];

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'listings',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'listings/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return mockRouteIDs.map((id) => ({
        id,
      }));
    },
  },
  {
    path: 'my-listings',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'new-listing',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'edit-listing/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return mockRouteIDs.map((id) => ({
        id,
      }));
    },
  },
  {
    path: 'add-listing',
    renderMode: RenderMode.Prerender,
  },
];
