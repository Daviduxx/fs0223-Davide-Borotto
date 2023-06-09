import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Models/i-todo';
import { Todo } from 'src/app/Models/todo';
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  allTodos:ITodo[] = [];
  loading:boolean = true;

  todo:Todo = new Todo('')
  constructor(private todoSVC:TodolistService){}

  ngOnInit():void{
    this.getTodos()

  }

  create():void{
    this.todoSVC.addTodo(this.todo).then(res => {
      console.log(res);
      this.getTodos()
    });
  }

  getTodos():void{
    this.todoSVC.getTodos().then(todo => {
      this.allTodos = todo;
      this.loading = false;
  })

}

deleteTodo(todo:ITodo):void{
  this.loading = true;
  this.todoSVC.deletePizza(todo).then(res => {
    this.ngOnInit()
  });
}
}
