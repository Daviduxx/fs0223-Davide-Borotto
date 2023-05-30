import { Component } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent {

  Posts:any[] = []
  activePosts:any[]

  constructor(postSVC: PostService){
    postSVC.getAllPost()
    .then(posts => this.Posts = posts);

    this.activePosts = this.Posts.filter(post => {post.active = true})
  }
}
