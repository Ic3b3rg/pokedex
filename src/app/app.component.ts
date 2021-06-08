import { ResultTypes } from './models/typesResponseAPI';
import { ApiUtilsService } from './services/api-utils.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SaveAllPokemons, SaveAllTypes } from './store/pokemon-store/actions';
import { MatDialog } from '@angular/material/dialog';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { RangePokemon, ResultRangePokemon } from './models/rangePokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  constructor(private apiUtils: ApiUtilsService, private store: Store<any>, private dialog:MatDialog) {}

  ngOnInit() {
    const dialogRef = this.dialog.open(LoadingDialogComponent,{
      width: '100vw',
      height: '100%',
      panelClass: 'custom-modal'
    })

    /**
     * I use ForkJoin for a "dictionary" of the API response and map them as they suit me
     */
    forkJoin({
      pokemonList: this.apiUtils.getRangeOfPokemon(151, 0).pipe(
        switchMap((res: RangePokemon) => {
          const allPokemon = res.results.map((pokemon: ResultRangePokemon) =>
            this.apiUtils.getPokemon(pokemon.name)
          );
          return forkJoin(allPokemon);
        })
      ),
      typesList: this.apiUtils.getAllType().pipe(
        map(res=> res.results.map((type:ResultTypes)=>({name:type.name, value: type.name})))
      )
    }).subscribe((el: any) => {
      this.store.dispatch(SaveAllPokemons({ pokemonArray: el.pokemonList }));
      this.store.dispatch(SaveAllTypes({ typesArray: el.typesList }));
      dialogRef.close()
    });

  }
}
