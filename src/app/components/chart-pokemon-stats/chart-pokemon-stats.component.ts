import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { Chart } from 'chart.js';
import { Stat } from 'src/app/models/pokemon';
@Component({
  selector: 'chart-pokemon-stats',
  templateUrl: './chart-pokemon-stats.component.html',
  styleUrls: ['./chart-pokemon-stats.component.css'],
})
export class ChartPokemonStatsComponent implements OnInit, AfterViewInit {
  @ViewChild('baseChart') baseChart: ElementRef;
  @Input() stats:Stat[];

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {

    let donutCtx = this.baseChart.nativeElement.getContext('2d');

    var data = {
      labels: this.stats.map(stat=>stat.stat.name.toUpperCase()),
      datasets: [
        {
          data:  this.stats.map(stat=>stat.base_stat), // Example data
          backgroundColor: ['#FF5B5B', '#7A9CC6', '#B0DB43', '#4EFFEF', '#4A306D'],
          label:'Base Stats'
        },
      ],
    };
    
    new Chart(donutCtx, {
      type: 'bar',
      data: data,
    });
  }
}
