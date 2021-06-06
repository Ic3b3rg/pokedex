import { SaveAllPokemons } from './../../store/pokemon-store/actions';
import { ApiUtilsService } from './../../services/api-utils.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private ApiUtils:ApiUtilsService,
    private store:Store
  ) { }

  ngOnInit(): void {
    this.ApiUtils.getRangeOfPokemon(151,0).pipe(
      switchMap((res:any)=>{
        const allPokemon= res.results.map((pokemon:any) => this.ApiUtils.getPokemon(pokemon.name))
        return forkJoin(allPokemon)
      })
    )
    .subscribe((el:any)=>{
      console.log(el)
      this.store.dispatch(SaveAllPokemons({pokemonArray:el}))

    })


  }

}

//this.ApiUtils.getPokemon(pokemon.name)
