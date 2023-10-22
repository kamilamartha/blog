import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { SobremimComponent } from './components/sobremim/sobremim.component';
import { DominiosComponent } from './components/dominios/dominios.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    SobremimComponent,
    DominiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
