import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  posts:any[] = [];
  newPosts:Post[] = []

  constructor(postSVC: PostService){

    // postSVC.getAllPost()
    // .then(posts => this.posts = posts);

    postSVC.getNewPosts().forEach(el => this.newPosts.push(el))

  }

}
