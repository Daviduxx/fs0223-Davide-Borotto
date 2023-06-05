import { Component, OnInit } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{


  postArr:Post[] = [];

  constructor() {}

  OnInit(){

  }
}
