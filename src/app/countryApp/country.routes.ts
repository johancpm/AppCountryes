import { Routes } from '@angular/router';
import { LayoutPageComponent } from './layout/layout-page/layout-page.component';
import CountryPageComponent from './pages/country-page/country-page.component';
import { PaisPageComponent } from './pages/pais-page/pais-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { CriPageComponent } from './pages/cri-page/cri-page.component';

export const routesCountry: Routes = [
  {
    path: 'layout-page',
    component: LayoutPageComponent,
    children: [
      {
        path:'page-capital',
        component: CountryPageComponent
      },
      {
        path:'page-pais',
        component: PaisPageComponent
      },
      {
        path:`page-region`,
        component: RegionPageComponent,

      },
      {
        path:'page-cri/:code',
        component: CriPageComponent
      },
      {
        path: '**',
        redirectTo: 'page-capital'
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'layout-pais'
  }

];

export default routesCountry;
