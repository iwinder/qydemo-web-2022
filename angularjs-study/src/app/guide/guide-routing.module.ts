import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideFormsModule } from './forms/guide-forms.module';

const routes: Routes = [
    {
        path: 'forms',
        loadChildren: 'app/guide/forms/guide-forms.module#GuideFormsModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GuideRoutingModule { }
