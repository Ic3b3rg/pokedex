import { Router } from '@angular/router';
import { Pokemon } from './../../../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon:Pokemon;
  constructor(
    private router:Router
  ) { 
  }

  ngOnInit(): void {
  }
  /**
   * Navigate to the Pokémon detail page
   * @param id Pokèmon ID 
   */
  goToPokemonDetail(id:number){
    this.router.navigate([`pokemon-details/${id}`])
  }

}
