import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { LittleTourComponent } from './user-input/little-tour/little-tour.component';
import { HeroFormComponent } from './hero/form/hero-form.component';
const routes: Routes = [
    {
        path: 'user-input', children: [
            {path: '', component: UserInputComponent},
            { path: 'little-tour', component: LittleTourComponent }
        ]
    },
    {
        path: 'hero', children: [
            { path: 'form', component: HeroFormComponent }
        ]
    }

]
@NgModule({
    imports: [RouterModule.forChild(routes), ],
    exports: [RouterModule],
    providers: [],
})
export class GuideFormsRoutingModule {
}
export const routedComponents = [
    UserInputComponent,
    LittleTourComponent,
    HeroFormComponent
]
