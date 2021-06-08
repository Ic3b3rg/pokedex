import { Pokemon } from './../../models/pokemon';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectOnePokemon } from 'src/app/store/pokemon-store/selectors';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonDetailsComponent implements OnInit {
  pokemon: Pokemon;

  constructor(private store: Store<any>, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params
      .pipe(
        take(1),
        switchMap(({ id }) => this.store.pipe(select(selectOnePokemon(+id))))
      )
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
  }
}
