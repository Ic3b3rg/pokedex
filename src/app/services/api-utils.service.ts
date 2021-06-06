import { myHttpService} from './http-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apis } from 'src/environments/apis';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilsService {

  constructor(
    private http: myHttpService
  ) { }

  getRangeOfPokemon(limit:number, offset:number):Observable<any>{
    return this.http.send(Apis.getRangeOfPokemons, {limit, offset})
  }
  getPokemon(name:string){
    return this.http.send(Apis.getPokemon, {name})
  }
}
