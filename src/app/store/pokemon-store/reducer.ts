
import { Action, createReducer, on, props } from '@ngrx/store';
import * as pokemonActions from './actions';


interface State{
  allPokemons:any[];
}
const initialState:State={
  allPokemons:[],
}



export const pokemonReducer = createReducer(
  initialState,
  on(pokemonActions.SaveAllPokemons, (state, pokemonArray) => {

    return {...state, allPokemons:  pokemonArray.pokemonArray }
  })

);
