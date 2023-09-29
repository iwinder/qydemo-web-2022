import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
    imports: [
        NgZorroAntdModule
    ],
    declarations: [HeaderComponent, FooterComponent],
    exports: [HeaderComponent, FooterComponent]
})
export class LayoutModule { }
