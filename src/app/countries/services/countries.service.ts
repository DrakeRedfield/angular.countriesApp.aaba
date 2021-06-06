import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { ICountry } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url: string = 'https://restcountries.eu/rest/v2';

  constructor(
    private http: HttpClient,
  ) { }

  get( url:string, isList = true ): Observable<any>{
    const params = new HttpParams();
    if(isList) params.set('fields','name;capital;capital;alpha2Code;flag;population;');
    const urlRequest = `${this.url}/${url}`;
    return this.http.get(urlRequest,{params}).pipe(
      catchError( err => of([]) )
    );
  }

  searchCountry( search:string ):Observable<ICountry[]>{
    return this.get(`name/${search}`)
  }

  searchRegion( search:string ):Observable<ICountry[]>{
    return this.get(`region/${search}`)
  }

  searchCapital( search:string ):Observable<ICountry[]>{
    return this.get(`capital/${search}`)
  }

  getCountryPerCode( search:string ):Observable<ICountry>{
    return this.get(`alpha/${search}`,false)
  }
}
