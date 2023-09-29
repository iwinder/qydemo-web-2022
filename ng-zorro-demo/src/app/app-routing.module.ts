import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookMineComponent } from './book/mine/book-mine.component';
import { IndexComponent } from './index/index.component';
// import { PageNotFoundComponent } from './not-found.component';
const routes: Routes = [
    { path: 'index', component: IndexComponent},
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    { path: 'book/mine/:webname', component: BookMineComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
