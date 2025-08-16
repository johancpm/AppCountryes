import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { CriInfoComponent } from "../../components/cri-components/cri-info/cri-info.component";
import { CriErrorComponent } from "../../components/cri-components/cri-error/cri-error.component";

@Component({
  selector: 'app-cri-page',
  imports: [CriInfoComponent, CriErrorComponent],
  templateUrl: './cri-page.component.html',
  styleUrl: './cri-page.component.css'
})
export class CriPageComponent {
  serviceCountry = inject(CountryService)
  snapshotRoute = inject(ActivatedRoute).snapshot.params['code'];

  getCountry = rxResource({
    request: () => ({code: this.snapshotRoute}),
    loader: ({request}) => {
      return this.serviceCountry.searchAlphaService(request.code)
    }
  })




}
