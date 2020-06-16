import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  signup(email: string, name: string, password: string) {
    console.log(`${environment.restApiBaseUrl}/auth/signup`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      'email': email,
      'name': name,
      'password': password,
    };
    return this.http.post(
      `${environment.restApiBaseUrl}/auth/signup`, body, {headers}
    ).pipe(
      catchError(this.handleError),
      tap((resData) => console.log(resData))
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    const errorMessage = 'An error occured';
    console.log(errorResponse);
    return throwError(errorMessage);
  }
}
