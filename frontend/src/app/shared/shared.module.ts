import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './components/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
