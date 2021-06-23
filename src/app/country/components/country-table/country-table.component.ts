import { Component, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { SearchCountries } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {

  @Input() countries: SearchCountries[] = [];

  /*constructor(
    private countryService: CountryService
  ){}*/

}
