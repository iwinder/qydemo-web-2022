import { NgModule } from '@angular/core';
import { GuideFormsRoutingModule, routedComponents } from './guide-forms-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  // <-- import the FormsModule before binding with [(ngModel)]
        GuideFormsRoutingModule
    ],
    declarations: [...routedComponents]
})
export class GuideFormsModule { }
