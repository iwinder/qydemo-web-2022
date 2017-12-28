import { NgModule } from '@angular/core';
import { GuideRoutingModule } from './guide-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  // <-- import the FormsModule before binding with [(ngModel)]
        GuideRoutingModule
    ],
    declarations: []
})
export class GuideModule { }
