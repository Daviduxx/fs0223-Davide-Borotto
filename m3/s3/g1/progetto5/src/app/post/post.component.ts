import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  constructor( private PostService:PostService) {}

  postArr:Post[] = [];
  LikedArr:Post[] = [];

  ngOnInit(): void {
    this.PostService.getPhotos().subscribe(res => {
      this.postArr = res.filter((p) => p.id < 10)
    })
  }

  addToFavourite(photo:Post){
    this.LikedArr.push(photo);
    console.log(this.LikedArr);
  }

  delete(id:number){
    this.PostService.deletePhoto(id).subscribe()
  }


}
