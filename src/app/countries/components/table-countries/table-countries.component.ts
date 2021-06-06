import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  styleUrls: ['./table-countries.component.scss']
})
export class TableCountriesComponent implements OnInit {

  @Input() countries: ICountry[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
