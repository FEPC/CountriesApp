import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
})
export class CountryInputComponent implements OnInit{

  //@ViewChild('txtCountry') txtCountry!: ElementRef<HTMLInputElement>;
  @Input() placeholder: string = '';
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  ngOnInit(): void{
    this.debouncer
          .pipe(debounceTime( 300 ))
          .subscribe(( term ) => this.onDebounce.emit( term ));
  }

  /*constructor(
    private countryService: CountryService
  ){}*/

  search(): void {
    
    this.onEnter.emit( this.term );

    /*const value = this.txtCountry.nativeElement.value;

    if( value.trim().length === 0 ){ return; }

    this.countryService.searchContries( value );

    this.txtCountry.nativeElement.value = ''*/

  }

  keyUp(): void{
    this.debouncer.next( this.term );
  }

}
