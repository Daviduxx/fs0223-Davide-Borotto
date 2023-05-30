import { UrlSegment } from "@angular/router";

export class Post {

  userId:number;
  id:number;
  title:string;
  body:string;
  active:boolean;

  constructor(userID:number,id:number,title:string,body:string,active:boolean){

    this.userId = userID;
    this.id = id;
    this.title = title;
    this.body = body;
    this.active = active;
  }
}
