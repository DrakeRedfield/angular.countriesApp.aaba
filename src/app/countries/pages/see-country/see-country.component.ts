import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountriesService } from '../../services/countries.service';
import { ICountry } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss']
})
export class SeeCountryComponent implements OnInit {

  codeCountry: string = '';
  country!: ICountry;

  constructor(
    private route: ActivatedRoute,
    private requests: CountriesService,
  ) { }

  ngOnInit(): void {
    this.route.params
    .pipe(
      switchMap( ( {id} ) => this.requests.getCountryPerCode( id ) ),
      tap(console.log)
    )
    .subscribe( resp => {
      this.country = resp;
    });
  }

}
