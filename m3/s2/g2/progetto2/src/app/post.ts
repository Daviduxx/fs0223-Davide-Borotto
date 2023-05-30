import { UrlSegment } from "@angular/router";

export class Post {

  userID:number;
  id:number;
  title:string;
  body:string;
  active:boolean;

  constructor(userID:number,id:number,title:string,body:string,active:boolean){

    this.userID = userID;
    this.id = id;
    this.title = title;
    this.body = body;
    this.active = active;
  }
}
