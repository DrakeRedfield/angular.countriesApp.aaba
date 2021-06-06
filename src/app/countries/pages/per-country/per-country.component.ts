import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
  styleUrls: ['./per-country.component.scss']
})
export class PerCountryComponent implements OnInit {

  textSearch: string = '';
  hasError: boolean = false;
  countries: ICountry[] = [];
  suggestionsCountries: ICountry[] = [];

  constructor(
    private requests: CountriesService,
  ) { }

  ngOnInit(): void {
  }

  search( text:string ){
    console.log(text);
    this.textSearch = text;
    this.hasError = false;
    if( this.textSearch.trim() !== '' ){
      this.requests.searchCountry(this.textSearch).subscribe( resp =>{
        this.countries = resp;
        if( resp.length === 0 ){
          this.hasError = true;
        }
      });
    }
    this.textSearch = '';
  }

  suggestions( ev:string ){
    this.textSearch = ev;
    this.requests.searchCountry( ev ).subscribe( resp => {
      this.suggestionsCountries = resp.splice(0,3);
    });
  }
}