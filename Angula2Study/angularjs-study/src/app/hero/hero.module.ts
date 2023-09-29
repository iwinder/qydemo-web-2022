import { NgModule } from '@angular/core';
import { HeroRoutingModule, routedComponents } from './hero-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // <-- NgModel lives here

@NgModule({
    imports: [
        CommonModule,
        FormsModule,  // <-- import the FormsModule before binding with [(ngModel)]
        HeroRoutingModule
    ],
    declarations: [...routedComponents]
})
export class HeroModule { }
