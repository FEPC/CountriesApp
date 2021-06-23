import { Component } from '@angular/core';
import { SearchCountries } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
})
export class CapitalComponent {

  termC : string = '';
  error: boolean = false;
  countries: SearchCountries[] = [];
  suggestionCapitals: SearchCountries[] = [];
  showSuggestion: boolean = false;

  constructor(
    private countryService: CountryService
  ){ }

  search( termC: string ): void {

    this.termC = termC;
    this.error = false;
    this.showSuggestion = false;

    this.countryService.searchCapital( this.termC )
      .subscribe(
        ( countries: SearchCountries[] ) => this.countries = countries
        , ( err ) => {
          this.error = true;
          this.countries = [];
        }
      );
  }

  suggestions( termC: string): void{

    this.termC = termC;
    this.error = false;
    this.showSuggestion = true;

    this.countryService.searchCapital( this.termC )
        .subscribe(
          ( capitals: SearchCountries[] ) => this.suggestionCapitals = capitals.splice( 0 , 5 ),
          ( err ) => this.suggestionCapitals = []
        )
  }

}
