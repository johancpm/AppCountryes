import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { TableComponent } from "../../components/table/table.component";
import {  of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pais-page',
  imports: [ SearchComponent, TableComponent],
  templateUrl: './pais-page.component.html',
  styleUrl: './pais-page.component.css'
})
export class PaisPageComponent {
  serviceCountry = inject(CountryService)
  activateRouter = inject(ActivatedRoute)
  router = inject(Router)

  queryParams = this.activateRouter.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal<string>(() => this.queryParams)

  getInfoCountry = rxResource({
    request: () => ({ query: this.query()}),

    loader:  ({request}) => {
       if(!request.query) return of([]);

       this.router.navigate(['/country-page/layout-page/page-pais'] , {
        queryParams: {
          query: request.query
        }
       })

       return   this.serviceCountry.searchCountryService(request.query)

    }
  })
}
