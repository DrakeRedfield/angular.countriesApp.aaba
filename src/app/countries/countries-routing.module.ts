import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerRegionComponent } from './pages/per-region/per-region.component';
import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';

const routes: Routes = [
    {
        path:'',
        component: PerCountryComponent,
    },{
        path:'region',
        component: PerRegionComponent,
    },{
        path:'capital',
        component: PerCapitalComponent,
    },{
        path: 'country/:id',
        component: SeeCountryComponent,
    },
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule,
    ]
})

export class CountriesRoutingModule {}