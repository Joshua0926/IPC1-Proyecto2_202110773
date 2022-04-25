import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { FiltroComponent } from './components/filtro/filtro.component';

import { HomeComponent } from './components/home/home.component'; 
import { LoginComponent } from './components/login/login.component';
import { MostrarFiltradoComponent } from './components/mostrar-filtrado/mostrar-filtrado.component';




const routes: Routes = [
  {
    path:'', 
    redirectTo: 'login', 
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'pokeTodos',
    component: HomeComponent,
    
    
  },
  {
    path: 'pokeTodos/Buscar',
    component: FiltroComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
