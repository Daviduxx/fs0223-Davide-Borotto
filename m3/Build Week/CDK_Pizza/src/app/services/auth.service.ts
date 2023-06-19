import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap, throwError } from 'rxjs';
import { AccessDataBerlusconi } from '../interfaces/access-data-berlusconi';
import { LoginDataBerlusconi } from '../interfaces/login-data-berlusconi';
import { RegisterDataBerlusconi } from '../interfaces/register-data-berlusconi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  jwtHelper:JwtHelperService = new JwtHelperService();
  apiUrl: string = 'http://localhost:3000';


  private authSubject = new BehaviorSubject<null | AccessDataBerlusconi>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => Boolean(dato)));

  authLogoutTimer:any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.restoreUser();

   }

  login(data:LoginDataBerlusconi){
    return this.http.post<AccessDataBerlusconi>(this.apiUrl + '/login', data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data))

      const expDate = this.jwtHelper
      .getTokenExpirationDate(data.accessToken) as Date;
      this.autoLogout(expDate)
    }),
      catchError(this.errors)
    )
  }

  restoreUser(){
    const userJson = localStorage.getItem('user');
    if(!userJson){
      return
    }
    const user:AccessDataBerlusconi = JSON.parse(userJson)
    if(this.jwtHelper.isTokenExpired(user.accessToken)){
      return;
    }

    this.authSubject.next(user);

  }

  signUp(data:RegisterDataBerlusconi){
    return this.http.post<AccessDataBerlusconi>(this.apiUrl + '/register', data)
    .pipe(catchError(this.errors));
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer);
    }
  }

  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime();
    this.authLogoutTimer = setTimeout(()=>{
      this.logout();
    }, expMs)
  }


  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return throwError('Email e password obbligatorie');
            break;
        case "Email already exists":
            return throwError('Utente esistente');
            break;
        case 'Email format is invalid':
            return throwError('Email scritta male');
            break;
        case 'Cannot find user':
            return throwError('utente inesistente');
            break;
            default:
        return throwError('Errore');
            break;
    }
  }
}
