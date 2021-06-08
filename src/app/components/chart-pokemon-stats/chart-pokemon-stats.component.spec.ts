import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPokemonStatsComponent } from './chart-pokemon-stats.component';

describe('ChartPokemonStatsComponent', () => {
  let component: ChartPokemonStatsComponent;
  let fixture: ComponentFixture<ChartPokemonStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPokemonStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPokemonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
