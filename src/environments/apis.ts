import { environment } from './environment';
import { Api } from "src/app/models/apis";

export class Apis {

    static getRangeOfPokemons: Api = {
      apiName: 'GetRangePokemons',
      name: 'pokemon?limit={limit}&offset={offset}',
      url: environment.baseURL,
      method: 'GET'
    }
    
    static getPokemon: Api = {
      apiName: 'getOnePokemon',
      name: 'pokemon/{name}',
      url: environment.baseURL,
      method: 'GET'
    }

    static getTypes:Api ={
      apiName:'getTypes',
      name: 'type',
      url: environment.baseURL,
      method:'GET'
    }
}  