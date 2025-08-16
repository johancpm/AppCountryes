import { Routes } from '@angular/router';
import HomePageComponent from './shared/home-page/home-page.component';


export const routes: Routes = [
  {
    path: 'page-home',
    component: HomePageComponent,
  },
  {
    path: 'country-page',
    loadChildren: () => import('./countryApp/country.routes')
  },
  {
    path: '**',
    redirectTo: 'page-home'
  }
];
