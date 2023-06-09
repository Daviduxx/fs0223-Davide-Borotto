import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IUser } from './interfaces/i-user';
import { HttpClient } from '@angular/common/http';
import { ISignup } from './interfaces/i-signup';
import { IAuthData } from './interfaces/i-auth-data';
import { Form, FormGroup } from '@angular/forms';
import { IPost } from './interfaces/i-post';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  APIURL = environment.APIURL;
  POSTAPI = environment.POSTAPI;

  private authSubject = new BehaviorSubject<null | IAuthData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(u => Boolean(u)))
  authLogoutTimer:any;
  router: any;
  constructor( private http:HttpClient) { }

  signup(datiUser:FormGroup){
    return this.http.post<IUser>(this.APIURL + '/signup', datiUser)
  }

  login(data:FormGroup){
    return this.http.post<IAuthData>(this.APIURL + '/login', data)
    .pipe(tap(data =>{
      this.authSubject.next(data);
      localStorage.setItem('user', JSON.stringify(data))

      const expDate = this.jwtHelper
      .getTokenExpirationDate(data.accessToken) as Date;
    }),

    )
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    if(this.authLogoutTimer){
      clearTimeout(this.authLogoutTimer);
    }
  }

  getPost(){
    return this.http.get<IPost[]>(this.POSTAPI)
  }

  writePost(newPost:IPost){
    return this.http.post<IPost>(this.POSTAPI, newPost)
  }

  deletePost(id:number){
    return this.http.delete(this.POSTAPI + '/' + id)
  }

  changePost(changedPost:IPost, id:number){
    return this.http.put(this.POSTAPI + '/' + id, changedPost)
  }
}
