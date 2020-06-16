import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <h1> Hello there!</h1>
    <button mat-button>Basic</button>
    <button mat-raised-button color="warn">Warn</button>
    <mat-slider min="1" max="100" step="1" value="1"></mat-slider>
  `
})

export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
