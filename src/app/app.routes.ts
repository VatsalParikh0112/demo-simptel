import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { About } from './routes/about/about';
import { Contact } from './routes/contact/contact';
import { PageNotFound } from './routes/page-not-found/page-not-found';


export const routes: Routes = [
  { 
    path: '', 
    component: Home
  },
  { 
    path: 'about', 
    component: About
  },
  { 
    path: 'about/:aboutId', 
    component: About
  },
  { 
    path: 'contact', 
    component: Contact 
  },
  {
    path: '**',
    component:PageNotFound
  }
];
