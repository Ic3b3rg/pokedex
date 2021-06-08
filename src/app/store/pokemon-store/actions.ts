import { Type } from './../../models/pokemon';
import { createAction, props } from '@ngrx/store';

export enum PokemonActionType {
  SaveAllPokemons = '[Pokemon Component] Save All Pokemon',
  SaveAllTypes = '[Pokemon Component] Save All Types',
  SearchPokemons = '[Pokemon Component] Search Pokemon',
  UpdatePokemon = '[Pokemon Component] Update Pokemon',
  CreatePokemon = '[Pokemon Component] Create Pokemon',
  UpdateTotal = '[Pokemon Component] Update Total',
  ActionFailure = '[Pokemon API] Execute action failure',
  ActionSuccess = '[Pokemon API] Execute action success',
  LoadSuccess = '[Pokemon API] Load Success',
  Refresh = '[Pokemon Page] Refresh',
  Selected = '[Pokemon Page] Select',
  SubmitSuccess = '[Pokemon API] Submit Success',
}

export const SaveAllPokemons = createAction(
  PokemonActionType.SaveAllPokemons,
  props<{ pokemonArray: any[] }>()
);
export const SaveAllTypes = createAction(
  PokemonActionType.SaveAllTypes,
  props<{ typesArray: Type[] }>()
);
