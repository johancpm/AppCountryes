import { CapitalCity } from "../interfaces/capital-city.interface";
import { Country } from "../interfaces/country.interface";


export class CountryMapper {


  static getCountry (country: CapitalCity ):Country {
    return {
      cc2: country.cca2,
      flag: country.flag,
      svg: country.flags.svg,
      name: country.translations['spa'].common,
      capital: country.capital?.join(','),
      poblacion: country.population,
      front: country.borders?.join(','),
      continent: country.continents.join(',')
    }
  }

  static getCountryArray (country: CapitalCity[] ):Country[] {
      return country.map(this.getCountry)
  }
}
