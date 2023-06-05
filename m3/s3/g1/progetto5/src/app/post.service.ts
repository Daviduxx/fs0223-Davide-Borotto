import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  APIURL:string = 'https://jsonplaceholder.typicode.com/photos';

  constructor( private http:HttpClient) { }

  getPhotos(){
    return this.http.get<Post[]>(this.APIURL)
  }

  // RICHIESTA POST CHE ORA NON SERVE
  // postPost(){
  //   return this.http.post<Post[]>(this.APIURL)
  // }

  deletePhoto(id:number){
    return this.http.delete(this.APIURL + '/' + id)
  }
}
