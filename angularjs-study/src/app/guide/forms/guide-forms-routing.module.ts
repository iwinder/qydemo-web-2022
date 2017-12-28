import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
const routes: Routes = [
    {
        path: 'user-input',
        component: UserInputComponent
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
    UserInputComponent
]
