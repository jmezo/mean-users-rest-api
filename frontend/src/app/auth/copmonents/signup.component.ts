import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  template: `
    <h1>Signup</h1>
    <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
      <mat-form-field>
        <mat-label>email</mat-label>
        <input matInput type="email" formControlName="email">
      </mat-form-field>

      <br>

      <mat-form-field>
        <mat-label>name</mat-label>
        <input matInput type="text" formControlName="name">
      </mat-form-field>

      <br>

      <mat-form-field>
        <mat-label>password</mat-label>
        <input matInput type="password" formControlName="password">
      </mat-form-field>

      <br>

      <mat-form-field>
        <mat-label>password again</mat-label>
        <input matInput type="password" formControlName="passwordAgain">
      </mat-form-field>

      <br>

      <mat-error *ngIf="checkShowPassordsDontMatchError()">passwords don't match</mat-error>

      <br>

      <button mat-raised-button type="submit">submit</button>
    </form>
  `
})

export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    name: new FormControl('', [Validators.maxLength(12)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    passwordAgain: new FormControl('', [Validators.required, Validators.maxLength(12)]),
  }, { validators: passwordMatchValidator });

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    console.log('register user');

  }

  checkShowPassordsDontMatchError() {
    const form = this.signupForm;
    return form.hasError('passwordsDontMatch') && form.get('password').touched && form.get('passwordAgain').touched;
  }
}

export const passwordMatchValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pw1 = control.get('password');
  const pw2 = control.get('passwordAgain');

  return pw1 && pw2 && pw1.value !== pw2.value ? { 'passwordsDontMatch': true } : null;
};
