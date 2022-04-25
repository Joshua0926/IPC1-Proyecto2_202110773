import { Component, OnInit} from '@angular/core';

import { PokemonInterface } from 'src/app/models/PokemonInterface';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  handleSearch(value: string ){
    this.filtro_valor = value
  }

  filtro_valor = ''

  searchText:any;

  

  constructor(public pokemonService: PokemonService) { }

  datosPokemon: PokemonInterface[] = [];
  

  ngOnInit(): void {
    this.ObtenerPokemons();
  
    
  
  }

  

 

  ObtenerPokemons(){
    this.pokemonService.CargarDatos().subscribe(async (res) => 
    {
     let valores: any = res;
      this.datosPokemon = valores;
      console.log("LISTA DE DATOS");
      console.log(this.datosPokemon);
    },
    err => console.log(err));
  }


    
      
}
