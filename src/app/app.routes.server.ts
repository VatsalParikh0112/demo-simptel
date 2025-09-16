import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'about/:aboutId',
    renderMode: RenderMode.Server  // 👈 server-side rendered on request
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
