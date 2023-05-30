import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  API:string = "../assets/db.json";


  constructor() { }

  getAllPost():Promise<Post[]>{
    return fetch(this.API).then(res => res.json())
  }
}
