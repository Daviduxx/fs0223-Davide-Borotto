import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './interfaces/i-post';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient) { }

  POSTAPI = environment.POSTAPI;

  getPost(){
    return this.http.get<IPost[]>(this.POSTAPI)
  }

  writePost(newPost:IPost){
    return this.http.post<IPost>(this.POSTAPI, newPost)
  }

  deletePost(id:number){
    return this.http.delete<IPost>(this.POSTAPI + '/' + id)
  }

  changePost(id:number, changedPost:IPost){
    return this.http.put(this.POSTAPI + '/' + id, changedPost)
  }
}
