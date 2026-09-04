import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Technologies } from './pages/technologies/technologies';
import { Getstarted } from './pages/getstarted/getstarted';
import { Blog } from './pages/blog/blog';
/* import { Blogpost } from './pages/blogpost/blogpost'; */

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'technologies', component: Technologies },
  { path: 'getstarted', component: Getstarted },
  { path: 'blog', component: Blog },
  /*  { path: 'blog/:id', component: Blogpost }, */
];
