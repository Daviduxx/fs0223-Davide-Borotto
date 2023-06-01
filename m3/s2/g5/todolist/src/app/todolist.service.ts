import { Injectable } from '@angular/core';
import { ITodo } from './Models/i-todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  APIURL:string = 'http://localhost:3000/todo';

  constructor() { }

  getTodos():Promise<ITodo[]>{
    return fetch(this.APIURL).then(res => res.json())
  }

  addTodo(todo:ITodo):Promise<ITodo>{
    return fetch(this.APIURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(res => res.json())
  }

  // aggiungere chiamata put per rendere todo completed == true

  updateTodo(todo:ITodo){
    return fetch(this.APIURL + '/' + todo.id,{
      method:'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
}
