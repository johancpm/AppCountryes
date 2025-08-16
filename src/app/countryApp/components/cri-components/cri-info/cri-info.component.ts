import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-cri-info',
  imports: [DecimalPipe],
  templateUrl: './cri-info.component.html',
  styleUrl: './cri-info.component.css'
})
export class CriInfoComponent {
 getCountry = input.required<Country>()

 getFullYear = computed(() => {
  return new Date().getFullYear()
 })
}
