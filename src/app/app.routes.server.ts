import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'about/:aboutId', renderMode: RenderMode.Server }, // dynamic SSR
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'api', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender }
];
