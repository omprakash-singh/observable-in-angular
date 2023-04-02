import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


const materialCom = [
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [materialCom]
})
export class MatrialModule { }
