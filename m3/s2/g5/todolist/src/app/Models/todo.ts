import { ITodo } from "./i-todo";

export class Todo implements ITodo{
  id?:number;
  title:string;
  completed:boolean = false

  constructor(title:string,completed:boolean = false){

    this.title = title;
    this.completed = false;
  }

}
