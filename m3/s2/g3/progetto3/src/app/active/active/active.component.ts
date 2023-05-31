import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  // Posts:Post[] = [];
  newPosts:Post[] = []

  constructor(private postSVC: PostService){}

  ngOnInit(){
    this.newPosts = this.postSVC.getPostByStatus(true);
  }

  toggleStatus(post:Post):void{
    this.postSVC.toggleStatus(post)
    this.newPosts = this.postSVC.getPostByStatus(true)
  }

  changeColor(type:string):string{

    let color:string = '';

    switch(type){

      case 'news':
      color = 'yellow';
      break;
      case 'politic':
        color = 'blue';
      break;
      case 'education':
        color = 'green';
      break;
    }
    return color;
  }

}
