import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-disactivated',
  templateUrl: './disactivated.component.html',
  styleUrls: ['./disactivated.component.scss']
})
export class DisactivatedComponent implements OnInit{

  // Posts:Post[] = [];
  newPosts:Post[] = []

  constructor(private postSVC: PostService){ }

  ngOnInit(): void {
    this.newPosts = this.postSVC.getPostByStatus(false)
  }

  toggleStatus(post:Post):void{
    this.postSVC.toggleStatus(post);
    this.newPosts = this.postSVC.getPostByStatus(false);
    console.log(this.newPosts);
  };

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
