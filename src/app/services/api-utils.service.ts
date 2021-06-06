import { HttpService} from './http-service.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apis } from 'src/environments/apis';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilsService {

  constructor(
    private http: HttpService
  ) { }

  getRangeOfPokemon(from:number, to:number):Observable<any>{
    return this.http.send(Apis.getPokemon)
  }
  }
