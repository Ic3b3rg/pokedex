import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    ChartsModule

  ],
  exports:[
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    ChartsModule
  ]
})
export class SharedModule { }
