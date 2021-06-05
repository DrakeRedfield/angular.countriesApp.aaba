import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PerCountryComponent } from './countries/pages/per-country/per-country.component';
import { PerRegionComponent } from './countries/pages/per-region/per-region.component';
import { PerCapitalComponent } from './countries/pages/per-capital/per-capital.component';
import { SeeCountryComponent } from './countries/pages/see-country/see-country.component';

const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule),
        pathMatch: 'full',
    },{
        path:'**',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot( routes ),
    ],
    exports:[
        RouterModule,
    ],
})
export class AppRoutingModule {
    
}