import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Models/i-todo';
import { TodolistService } from 'src/app/todolist.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  allTodos:ITodo[] = [];
  constructor(private todoSVC:TodolistService){}

  ngOnInit(){

    this.todoSVC.getTodos().then(todo => this.allTodos = todo);

  }

}
