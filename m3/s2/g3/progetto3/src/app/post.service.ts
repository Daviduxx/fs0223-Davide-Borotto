import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  // API:string = "assets/db.json";

  private newPostsArray:Post[] = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      active: true,
      type: "news"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      active: false,
      type: "politic"
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      active: true,
      type: "news"
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      active: false,
      type: "education"
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      active: true,
      type: "politic"
    },
    {
      userId: 1,
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      active: false,
      type: "education"
    }
  ]


  constructor() { }

  // getAllPost():Promise<Post[]>{
  //   return fetch(this.API).then(res => res.json())
  // }

  getNewPosts():Post[]{
    return this.newPostsArray;
  }

  getPostByStatus(status:boolean):Post[]{
    return this.newPostsArray.filter(p => p.active == status)
  }

  toggleStatus(post:Post):void{
    post.active = !post.active;

    let index = this.newPostsArray.findIndex(p => p.userId == post.userId)
    this.newPostsArray.splice(index,1,post)
    console.log(post);

  }


}
