import { Routes } from '@angular/router';
import { Home } from './routes/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    loadComponent: () => import('./routes/about/about').then(c => c.About)
  },
  {
    path: 'about/:aboutId',
    loadComponent: () => import('./routes/about/about').then(c => c.About)
  },
  {
    path: 'contact',
    loadComponent: () => import('./routes/contact/contact').then(c => c.Contact)
  },
  {
    path: 'api',
    loadComponent: () => import('./routes/api/api').then(c => c.API)
  },
  { 
    path: '**',
    loadComponent: () => import('./routes/page-not-found/page-not-found').then(c => c.PageNotFound) 
  }

];
