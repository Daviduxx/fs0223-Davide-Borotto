import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {

  Posts:Post[] = []

  constructor(private postSVC: PostService){

    this.postSVC.getAllPost()
    .then(posts => {
      let filteredPosts = posts.filter(p => p.active)
      this.Posts = filteredPosts;
    });

  }
}
