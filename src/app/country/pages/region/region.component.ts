import { Component } from '@angular/core';
import { SearchCountries } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
})
export class RegionComponent {

  regions: string[] = ['africa','americas','asia','europe','oceania'];
  activeRegion: string = '';
  countries: SearchCountries[] = [];
  termR : string = '';
  error: boolean = false;

  constructor(
    private countryService: CountryService
  ){ }

  activateRegion( region: string ):void {
    if (region == this.activeRegion ) { return; }

    this.activeRegion = region;

    this.search( region );

  }

  getCssClass( region:string ):string {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  search( termR: string ): void {
    this.termR = termR;
    this.error = false;

    this.countryService.searchRegion( this.termR )
      .subscribe(
        ( countries: SearchCountries[] ) => this.countries = countries
        , ( err ) => {
          this.error = true;
          this.countries = [];
        }
      );
  }

}
