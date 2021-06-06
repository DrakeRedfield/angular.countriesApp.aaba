import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/countries.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-per-region',
  templateUrl: './per-region.component.html',
  styleUrls: ['./per-region.component.scss']
})
export class PerRegionComponent implements OnInit {

  textSearch: string = '';
  hasError: boolean = false;
  countries: ICountry[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']

  constructor(
    private requests: CountriesService,
  ) { }

  ngOnInit(): void {
  }

  search( text:string ){
    console.log(text);
    this.hasError = false;
    if( this.textSearch !== text ){
      this.countries = [];
      this.textSearch = text;
      this.requests.searchRegion(this.textSearch).subscribe( resp =>{
        this.countries = resp;
        if( resp.length === 0 ){
          this.hasError = true;
        }
      });
    }
  }

  suggestions( ev:string ){
    console.log(ev)
  }
}