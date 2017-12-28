import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroesComponent } from './common/view/heroes.component';
import { HeroSearchComponent } from './search/hero-search.component';

import { HeroService } from './common/service/hero.service';

const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), ],
    exports: [RouterModule],
    providers: [HeroService],
})
export class HeroRoutingModule { }

export const routedComponents = [
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
]
