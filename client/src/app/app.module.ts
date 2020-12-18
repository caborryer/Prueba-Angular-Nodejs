import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

// Components
import {HomeComponent} from "./components/home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {GaleryComponent} from "./components/home/galery.component";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GaleryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
