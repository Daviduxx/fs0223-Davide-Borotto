import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  APIURL:string = 'https://jsonplaceholder.typicode.com/photos';

  constructor() { }
}
