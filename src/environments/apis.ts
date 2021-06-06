import { environment } from './environment';
import { Api } from "src/app/models/apis";

export class Apis {

    static getPokemon: Api = {
      apiName: 'APILogout',
      name: 'pokemon/{id}',
      url: environment.baseURL,
      method: 'GET'
    }
}  