import { Component, inject, input, linkedSignal, output, signal } from '@angular/core';
import { Region } from '../../interfaces/btn-region.type';

@Component({
  selector: 'app-btn-option-region',
  imports: [],
  templateUrl: './btn-option-region.component.html',
  styleUrl: './btn-option-region.component.css'
})
export class BtnOptionRegionComponent {
  RegionOption = output<Region>()
  initialValue = input<string>()
  selectRegionOption = linkedSignal<string>(() => this.initialValue() ?? '')


  public regions:  Region[] = [

    'Americas',
    'Africa',
    'Antarctic',
    'Asia',
    'Europe',
    'Oceania',
  ]

  emitRegion  (reg: Region) {

    this.selectRegionOption.set(reg)
   return this.RegionOption.emit(reg)
  }


}
