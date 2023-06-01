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

  todo:Todo = new Todo('')
  constructor(private todoSVC:TodolistService){}

  ngOnInit(){
    this.getTodos()

  }

  create(){
    this.todoSVC.addTodo(this.todo).then(res => {
      console.log(res);
      this.getTodos()
    });
  }

  getTodos(){
    this.todoSVC.getTodos().then(todo => this.allTodos = todo);

  }

}
