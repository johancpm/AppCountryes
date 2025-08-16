import { Component, input, signal } from '@angular/core';
import { CapitalCity } from '../../interfaces/capital-city.interface';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
getCapital = input.required<Country[]>()

errorMessage = input<string | unknown | null>('')
isLoading = input<boolean>(false)
isEmpti = input<boolean>(false)

}
