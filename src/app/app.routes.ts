import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'view',
    loadComponent: () => import('./components/view-chords/view-chords').then((m) => m.ViewChords),
  },
];
