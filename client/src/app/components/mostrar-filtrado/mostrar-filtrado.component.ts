import { Component, Input, OnInit } from '@angular/core';
import { NumeroInterface } from 'src/app/models/NumeroInterface';

@Component({
  selector: 'app-mostrar-filtrado',
  templateUrl: './mostrar-filtrado.component.html',
  styleUrls: ['./mostrar-filtrado.component.css']
})
export class MostrarFiltradoComponent implements OnInit {

  constructor() { }

  @Input() numeroPokemones : NumeroInterface; 

  ngOnInit(): void {

    console.log("--------------");
    console.log(this.numeroPokemones);
    console.log("--------------");
    
  }

  ImprimirPokemon(){
    console.log("--------------");
    console.log(this.numeroPokemones);
    console.log("--------------");

  }

}
