import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/detail/hero-detail.component';
import { HeroesComponent } from './hero/common/view/heroes.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/hero/hero.module#HeroModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
