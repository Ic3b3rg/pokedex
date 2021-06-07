import { Type, Pokemon } from './../../models/pokemon';

import { Action, createReducer, on, props } from '@ngrx/store';
import * as pokemonActions from './actions';


interface State{
  allPokemons:Pokemon[];
  allTypes:Type[]
}
const initialState:State={
  allPokemons:[],
  allTypes:[]
}



export const pokemonReducer = createReducer(
  initialState,
  on(pokemonActions.SaveAllPokemons, (state, pokemonArray) => {

    return {...state, allPokemons:  pokemonArray.pokemonArray }
  }),
  on(pokemonActions.SaveAllTypes, (state, typesArray )=>{
    return {...state, allTypes: typesArray.typesArray}
  }),


);
