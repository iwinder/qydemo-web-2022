import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: 'app/hero/hero.module#HeroModule'
    },
    {
        path: 'guide',
        loadChildren: 'app/guide/guide.module#GuideModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
