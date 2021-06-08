import { Type } from './../../models/type';
import { Pokemon, InnerPokemonType } from './../../models/pokemon';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription, combineLatest } from 'rxjs';
import {
  selectAllPokemon,
  selectAllType,
} from 'src/app/store/pokemon-store/selectors';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  allSubscription: Subscription[] = [];

  allTypes: Type[];
  allPokemons: Pokemon[];
  filteredPokemonList: Pokemon[];
  

  searchForm: FormGroup = new FormGroup({
    inputText: new FormControl(''),
    type: new FormControl(''),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    /**
     * I take all the values ​​I need from the store for the component
     */
    this.allSubscription.push(
      combineLatest([
        this.store.pipe(select(selectAllPokemon)),
        this.store.pipe(select(selectAllType)),
      ]).subscribe((allPokemons: any[]) => {
        this.allPokemons = allPokemons[0];
        this.filteredPokemonList = allPokemons[0];
        this.allTypes = [{ name: 'Tutti', value: '' }, ...allPokemons[1]];
      })
    );
    /**
     * I subscribe to the inputs and launch filtering on each input field
     */
    this.allSubscription.push(
      this.searchForm.valueChanges
        .pipe(distinctUntilChanged(), debounceTime(500))
        .subscribe((el) => {
          this.filteredPokemonList = this.allPokemons;
          this.filteredPokemonList = this.filteredPokemonList.filter(
            (pokemon) =>
              pokemon.name.toLowerCase().includes(el.inputText.toLowerCase())
          );
          if (el.type.length > 0) {
            this.filteredPokemonList = this.filteredPokemonList.filter(
              (pokemon) => this.hasType(pokemon.types, el.type)
            );
          }
        })
    );
  }
  /** 
   * Check which Pokémon have the type you are looking for
  @return boolean
  */
  hasType(arrTypes: any[], valueToSearch: string): boolean {
    const value = valueToSearch.toLowerCase();
    return arrTypes.find((element: any) => element.type.name === value) !==
      undefined
      ? true
      : false;
  }
  /**
   * Function to sort the types in the select
   * @param a sort param
   * @param b sort param
   * @returns number
   */
  compare( a:Type, b:Type ):number {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribe in for all subscribers of the component
     */
    this.allSubscription.map((sub) => sub.unsubscribe());
  }
}
