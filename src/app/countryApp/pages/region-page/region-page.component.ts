import { Component, inject, linkedSignal } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { BtnOptionRegionComponent } from "../../components/btn-option-region/btn-option-region.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../../interfaces/btn-region.type';

function validatorRegion (region: string): Region {
   const reg: Record< string , Region> = {
     Africa:  'Africa',
    Americas: 'Americas',
    Antarctic: 'Antarctic',
    Asia: 'Asia',
    Europe: 'Europe',
    Oceania: 'Oceania',
   }
   return reg[region] ?? 'Americas';
}

@Component({
  selector: 'app-region-page',
  imports: [TableComponent, BtnOptionRegionComponent],
  templateUrl: './region-page.component.html',
  styleUrl: './region-page.component.css'
})
export class RegionPageComponent {
  serviceCountry = inject(CountryService)
  activateRouter = inject(ActivatedRoute)
  router = inject(Router)

  queryParams = this.activateRouter.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal<Region>(() => validatorRegion(this.queryParams))

  getInfoCountry = rxResource({
    request: () => ({ query: this.query()}),



    loader:  ({request}) => {
       if(!request.query) return of([]);

       this.router.navigate(['/country-page/layout-page/page-region'], {
        queryParams: {
          query: request.query
        }
       })

       return   this.serviceCountry.searchRegionService(request.query)

    }
  })
}
