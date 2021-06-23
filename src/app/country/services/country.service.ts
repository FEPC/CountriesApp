import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchCountries, Currency } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private serviceUrl: string = 'https://restcountries.eu/rest/v2'
  
  get params(): HttpParams{
    return new HttpParams().set( 'fields' , 'name;capital;alpha2Code;flag;population' );
  }

  constructor(
    private http: HttpClient
  ){ }

  searchContries( query: string = ''): Observable<SearchCountries[]> {

    query = query.trim().toLowerCase();
    
    const url = `${ this.serviceUrl }/name/${ query }`;

    return this.http.get<SearchCountries[]>( url, { params: this.params } );    
  
  }

  searchCapital( query: string = ''): Observable<SearchCountries[]> {

    query = query.trim().toLowerCase();
    
    const url = `${ this.serviceUrl }/capital/${ query }`;

    return this.http.get<SearchCountries[]>( url, { params: this.params } );    
  
  }

  searchRegion( query: string = ''): Observable<SearchCountries[]> {

    query = query.trim().toLowerCase();
    
    const url = `${ this.serviceUrl }/region/${ query }`;

    return this.http.get<SearchCountries[]>( url, { params: this.params } );    
  
  }

  searchAlphaCode( query: string = ''): Observable<SearchCountries> {

    query = query.trim().toLowerCase();
    
    const url = `${ this.serviceUrl }/alpha/${ query }`;

    return this.http.get<SearchCountries>( url );    
  
  }

}
