import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TestmoduleModule } from './compoents/testmodule/testmodule.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestmoduleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot (),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
