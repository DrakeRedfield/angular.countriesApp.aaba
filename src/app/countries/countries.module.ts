import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { FormsModule } from '@angular/forms';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';



@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerRegionComponent,
    SeeCountryComponent,
    TableCountriesComponent,
    SearchbarComponent
  ],
  exports:[
   
  ],
  imports: [
    CountriesRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class CountriesModule { }
