import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

const MATERIAL = [
  MatFormFieldModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatDialogModule
];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL
})
export class MaterialModule { }
