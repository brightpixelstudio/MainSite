import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Technologies } from './pages/technologies/technologies';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'technologies', component: Technologies },
];
