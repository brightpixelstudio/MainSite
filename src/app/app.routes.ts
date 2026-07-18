import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Technologies } from './pages/technologies/technologies';
import { Getstarted } from './pages/getstarted/getstarted';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'technologies', component: Technologies },
  { path: 'getstarted', component: Getstarted },
];
