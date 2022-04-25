import { Component, OnInit } from '@angular/core';
import { NumeroInterface } from 'src/app/models/NumeroInterface'; 
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  value : any;
  

  

  constructor(public pokemonService: PokemonService, private http : HttpClient) { }

  

  numerosPokemon: NumeroInterface[]= [];

   

 

  ngOnInit(): void {
    this.ObtenerTodos();
    
  }


  getMailIDentered(){
    
    let PokeValor: any = this.value;
    console.log("el valor es" + PokeValor)

  }


  ObtenerPokemonsNumeros(){
    let id1 = this.value;
   
    console.log("el id es: "+id1)


    this.http.get<any>(`http://localhost:3000/pokeTodos/${this.value}`).subscribe(async (res) => 
    {
     let valores: any = res;
      this.numerosPokemon = valores;
      console.log("LISTA DE DATOS");
      console.log(this.numerosPokemon);

     

    },
    err => console.log(err));
  }

  ObtenerTodos(){
    let id1 = this.value;
   
    console.log("el id es: "+id1)


    this.http.get<any>(`http://localhost:3000/pokeTodos`).subscribe(async (res) => 
    {
     let valores: any = res;
      this.numerosPokemon = valores;
      console.log("LISTA DE DATOS");
      console.log(this.numerosPokemon);

     

    },
    err => console.log(err));
  }

 
 

}
