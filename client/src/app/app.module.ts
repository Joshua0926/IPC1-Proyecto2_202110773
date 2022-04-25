import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroComponent } from './components/filtro/filtro.component';
import { FiltroNumeroPipe } from './pipes/filtro-numero.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarFiltradoComponent } from './components/mostrar-filtrado/mostrar-filtrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigateComponent,
    CardsComponent,
    LoginComponent,
    FiltroComponent,
    FiltroNumeroPipe,
    MostrarFiltradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
