import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSliderModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [],
  exports: [...modules],
  imports: [...modules],
})
export class MaterialModule { }
