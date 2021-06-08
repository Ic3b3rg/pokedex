import { Type } from './../../models/type';
import { Pokemon } from './../../models/pokemon';
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
    this.allSubscription.push(
      combineLatest([
        this.store.pipe(select(selectAllPokemon)),
        this.store.pipe(select(selectAllType)),
      ]).subscribe((allPokemons: any[]) => {
        console.log(allPokemons);
        this.allPokemons = allPokemons[0];
        this.filteredPokemonList = allPokemons[0];
        this.allTypes = [{ name: 'Tutti', value: '' }, ...allPokemons[1]];
      })
    );

    this.allSubscription.push(
      this.searchForm.valueChanges
        .pipe(distinctUntilChanged(), debounceTime(500))
        .subscribe((el) => {
          console.log(el);
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

  hasType(arrTypes: any[], valueToSearch: string): boolean {
    const value = valueToSearch.toLowerCase();
    return arrTypes.find((element: any) => element.type.name === value) !==
      undefined
      ? true
      : false;
  }

  ngOnDestroy(): void {
    this.allSubscription.map((sub) => sub.unsubscribe());
  }
}
