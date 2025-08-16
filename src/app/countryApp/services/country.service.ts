import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CapitalCity } from '../interfaces/capital-city.interface';
import {  catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';



const API_URL = 'https://restcountries.com/v3.1'

@Injectable({providedIn: 'root'})
export class CountryService {

  private http = inject(HttpClient)
  private caheGetCountry = new Map< string, Country[]>( )

  searchAllCountry ( query: string, urlDate: string): Observable<Country[]> {
      query.toLowerCase()
         const url = `${API_URL}/${urlDate}/${query}`


         if(this.caheGetCountry.has(query)){
           return of(this.caheGetCountry.get(query)!)
         }
          console.log(`accediendo al servido para obtener informacion de ${query}`);

          return this.http
        .get<CapitalCity[] >(url)
        .pipe(
          map( res => CountryMapper.getCountryArray(res)),
          tap( countryes => this.caheGetCountry.set(query, countryes)),
          catchError(error => {
            console.log('Error Fetching', error);
           return throwError(() => new Error('no se pudo obtener pais con ese query '))
          })
        );
  }

  searchCapitalService (query: string): Observable<Country[]> {
         return this.searchAllCountry(query,'capital')
  }

  searchCountryService (query: string): Observable<Country[]> {
        return this.searchAllCountry(query,'name')
  }

   searchAlphaService (code: string): Observable<Country>  {
       return this.searchAllCountry(code,'alpha')
       .pipe( map( result =>  result[0]))
  }
  searchRegionService (query: string): Observable<Country[]>  {


       return this.searchAllCountry(query,'region')

  }
}
