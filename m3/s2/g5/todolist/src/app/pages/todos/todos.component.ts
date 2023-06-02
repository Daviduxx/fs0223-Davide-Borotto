import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Models/i-todo';
import { Todo } from 'src/app/Models/todo';
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  allTodos:ITodo[] = [];
  loading:boolean = true;

  todo:Todo = new Todo('')
  constructor(private todoSVC:TodolistService){}

  ngOnInit(){
    this.getTodos()
  }

  create():void{
    this.loading = true;
    this.todoSVC.addTodo(this.todo).then(res => {
      console.log(res);
      this.getTodos()
    });
  }

  getTodos():void{
    this.todoSVC.getTodos().then(todo => {
      this.allTodos = todo;
      this.loading = false;
  }
)}

  update(todo:any):void{
    todo.completed = true;
    this.todoSVC.updateTodo(todo).then(res => console.log(res))
    console.log(todo);


  }
}
