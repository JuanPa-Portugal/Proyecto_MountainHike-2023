import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, catchError, tap, throwError } from "rxjs";
import { LoggedInUser, UserCredentials } from "./auth/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedUserSubject = new BehaviorSubject<LoggedInUser | null>(null);

  constructor(private http: HttpClient) { }


  logIn(credentials: UserCredentials) {
    return this.http.post(
      'http://127.0.0.1:8000/api-user-login/', credentials)      
      .pipe(
        catchError(this.handleError),
        tap((res) => {
          this.handleAuth(res);
        }
      )
    );
  }

  get loggedUser$(): Observable<LoggedInUser | null> {
    return this.loggedUserSubject.asObservable();
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);
    let errormessage = 'An unknown errror occured';
    if (!error.error) {
      return throwError(() => errormessage);
    }
    if (error.error.non_field_errors) {
      errormessage = error.error.non_field_errors[0];
    }
    if (error.error.email) {
      errormessage = error.error.email[0];
    }
    if (error.error.username) {
      errormessage = error.error.username[0];
    }
    return throwError(() => errormessage);
  }

  private handleAuth(res: LoggedInUser) {
    const user = new LoggedInUser(
      res.id,
      res.username,
      res.token
    );
    this.loggedUserSubject.next(user);
    localStorage.setItem('loggedUser', JSON.stringify(user));
    console.log("login en auth service");
  }
  logout() {
    this.loggedUserSubject.next(null);
    localStorage.removeItem('loggedUser');
    console.log("logut en auth service");
  }

}