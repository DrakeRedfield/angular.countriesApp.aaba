import { HttpClient } from '@angular/common/http';
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

  get( url:string ): Observable<any>{
    const urlRequest = `${this.url}/${url}`;
    return this.http.get(urlRequest).pipe(
      catchError( err => of([]) )
    );
  }

  searchCountry( search:string ):Observable<ICountry[]>{
    return this.get(`name/${search}`)
  }
}
