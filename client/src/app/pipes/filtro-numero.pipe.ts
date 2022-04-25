import { Pipe, PipeTransform } from '@angular/core';
import { PokemonInterface } from '../models/PokemonInterface';

@Pipe({
  name: 'filtroNumero'
})
export class FiltroNumeroPipe implements PipeTransform {

  transform(pokemons: any, page: number=0): any[any] {
    console.log(pokemons)
  }

}
