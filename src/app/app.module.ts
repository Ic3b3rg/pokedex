import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { PokemonCardComponent } from './components/home/pokemon-card/pokemon-card.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './store/pokemon-store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { MatDialogRef } from '@angular/material/dialog';
import { ChartPokemonStatsComponent } from './components/chart-pokemon-stats/chart-pokemon-stats.component';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    ChartPokemonStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    StoreModule.forRoot({ pokemonStore: pokemonReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
