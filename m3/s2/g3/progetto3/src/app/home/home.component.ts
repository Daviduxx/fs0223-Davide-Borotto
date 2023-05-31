import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  newPosts:Post[] = []

  constructor(private postSVC: PostService){}

  ngOnInit(): void {
   this.newPosts = this.postSVC.getNewPosts();
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
