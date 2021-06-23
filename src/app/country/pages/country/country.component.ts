import { Component } from '@angular/core';
import { SearchCountries } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      cursor: pointer
    `
  ]
})
export class CountryComponent {

  term : string = '';
  error: boolean = false;
  countries: SearchCountries[] = [];
  suggestionCountries: SearchCountries[] = [];
  showSuggestion: boolean = false;

  constructor(
    private countryService: CountryService
  ){ }

  search( term: string ): void {
    this.term = term;
    this.error = false;
    this.showSuggestion = false;

    this.countryService.searchContries( this.term )
      .subscribe(
        ( countries: SearchCountries[] ) => this.countries = countries
        , ( err ) => {
          this.error = true;
          this.countries = [];
        }
      );
  }

  suggestions( term: string): void{
    this.term = term;
    this.error = false;
    this.showSuggestion = true;

    this.countryService.searchContries( this.term )
        .subscribe(
          ( countries: SearchCountries[] ) => this.suggestionCountries = countries.splice( 0 , 5 ),
          ( err ) => this.suggestionCountries = []
        )
  }

}
