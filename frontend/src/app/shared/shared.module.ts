import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './components/main-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MaterialModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
