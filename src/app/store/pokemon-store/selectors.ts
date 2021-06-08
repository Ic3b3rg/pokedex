import { createSelector } from '@ngrx/store';
import { Pokemon } from './../../models/pokemon';

export const selectAllPokemon = (state:any) => state.pokemonStore.allPokemons;
export const selectAllType = (state:any) => state.pokemonStore.allTypes;
export const selectOnePokemon = (pokemonID: number) =>
  createSelector(selectAllPokemon, (pokemons:any) => pokemons.filter((pokemon:Pokemon)=>pokemon.id === pokemonID).pop());