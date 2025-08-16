import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchComponent } from "../../components/search/search.component";
import { TableComponent } from "../../components/table/table.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-country-page',
  imports: [ SearchComponent, TableComponent],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export default class CountryPageComponent {
  capitalService = inject(CountryService);
  activateRoute = inject(ActivatedRoute)
  router = inject(Router)

  queryParams = this.activateRoute.snapshot.queryParamMap.get('query') ?? '';
  statusQuery = linkedSignal<string>(() => this.queryParams)



  /* NUEVA FORMA DE REALIZAR PETICIONES DE MANERA MAS CORTA CON EL NUEVO RECURSO DE ANGULAR "resource" */

  /* getInfoCapital = resource({
    request: () => ({ query: this.statusQuery()}),

    loader: async ({request}) => {
      if(!request.query) return [];

      return await firstValueFrom(
        this.capitalService.searchCapitalService(request.query)
      )
    }
  }) */

  /* NUEVA FORMA DE REALIZAR PETICIONES DE MANERA MAS CORTA CON EL NUEVO RECURSO DE ANGULAR "RxResource" */

  getInfoCapital = rxResource({


    request: () => ({ query: this.statusQuery()}),

    loader:  ({request}) => {
      if(!request.query) return of([]) ;

      this.router.navigate(['/country-page/layout-page/page-capital'], {
        queryParams: {
          query:request.query
        }
      })

      return  this.capitalService.searchCapitalService(request.query)

    }
  })

  /* FORMA MAS LARGA DE REALIZAR LA PETICION CON LOS RECURSOS DE ANGULAR ANTERIORES */

  /* loading = signal<boolean>(false);
  getCountries = signal<Country[]>([])
  errors = signal<string | null>(null)

  getInfoCapital (query:string) {
    if(this.loading()) return;
    this.loading.set(true)
    this.errors.set(null)

     this.capitalService.searchCapitalService(query).subscribe({
      next: (countryes) => {
        this.loading.set(false)
        this.getCountries.set(countryes)
      },
      error: (err) => {
        this.loading.set(false)
        this.getCountries.set([])
        this.errors.set(err)
      }
     })
  } */


}
