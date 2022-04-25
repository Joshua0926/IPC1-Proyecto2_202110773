import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FiltroComponent } from '../components/filtro/filtro.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  API_URI = 'http://localhost:3000';
  filtroNumero:'';
  
  

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  CargarDatos() : any {
    return this.http.get(`${this.API_URI}/pokeTodos`);
  }

  CargarUsuario() : any {
    return this.http.get(`${this.API_URI}/Users`);
  }

  CargarPokemon() : any {
    return this.http.get(`${this.API_URI}/pokeNumero/9`)
  }
  
  

}
