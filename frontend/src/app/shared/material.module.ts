import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSliderModule,
];

@NgModule({
  declarations: [],
  exports: [...modules],
  imports: [...modules],
})
export class MaterialModule { }
