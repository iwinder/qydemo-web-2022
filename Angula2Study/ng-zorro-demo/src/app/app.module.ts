import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BookMineComponent } from './book/mine/book-mine.component'
import { BookMineService } from './book/book-mine.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './book/in-memory-data.service';
import { LayoutModule } from './common/layout/layout.module';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BookMineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgZorroAntdModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    LayoutModule,
  ],
  providers: [BookMineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
