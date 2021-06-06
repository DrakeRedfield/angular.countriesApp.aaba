import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
  styleUrls: ['./per-capital.component.scss']
})
export class PerCapitalComponent implements OnInit {

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
      this.requests.searchCapital(this.textSearch).subscribe( resp =>{
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
    this.requests.searchCapital( ev ).subscribe( resp => {
      this.suggestionsCountries = resp.splice(0,3);
    });
  }
}