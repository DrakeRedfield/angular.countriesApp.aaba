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

  constructor(
    private requests: CountriesService,
  ) { }

  ngOnInit(): void {
  }

  search(){
    this.hasError = false;
    if( this.textSearch.trim() !== '' ){
      this.requests.searchCountry(this.textSearch).subscribe( resp =>{
        this.countries = resp;
        if( resp.length === 0 ){
          this.hasError = true;
        }
      });
    }
  }

}
