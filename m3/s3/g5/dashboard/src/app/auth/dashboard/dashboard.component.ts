import { Component } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


    constructor( private fb:FormBuilder, private AuthSVC:AuthService, private CrudSVC:CrudService){}

    postArr:IPost[] = []
    postForm!:FormGroup;
    changeMod:boolean = false;
    idPost:number = 0;

    ngOnInit(){
      this.AuthSVC.resUser()
      this.CrudSVC.getPost().subscribe(res => {
        this.postArr = res;
        console.log(this.postArr);

      }),
      this.postForm = this.fb.group({
        title: this.fb.control(null,[Validators.required]),
        subtitle: this.fb.control(null,[Validators.required]),
        content: this.fb.control(null,[Validators.required]),
        // id: this.fb.control(0),
    })
    }

    logout(){
      this.AuthSVC.logout();
    }

    write(){
      this.CrudSVC.writePost(this.postForm.value).subscribe(p => {
        console.log(p);
        this.postArr.push(p);
        console.log(this.postArr);
        this.postForm.reset();

      })
    }

    delete(id:number, i:number){
      this.CrudSVC.deletePost(id).subscribe(p => {
        this.postArr.splice(i, 1)
        console.log(this.postArr);
      }

      );


    }

    changeForm(i:number){
      this.postForm = this.fb.group({
        title: this.fb.control(this.postArr[i].title,[Validators.required]),
        subtitle: this.fb.control(this.postArr[i].subtitle,[Validators.required]),
        content: this.fb.control(this.postArr[i].content,[Validators.required]),
        id: this.fb.control(this.postArr[i].id),
    })
    this.changeMod = true;
    this.idPost = i;
    console.log(this.postForm.value.id);

    }

    change(){
      this.CrudSVC.changePost(this.postForm.value.id, this.postForm.value).subscribe(p => console.log(p))
      console.log(this.postForm.value.id);

      this.changeMod = false;
      this.postArr.splice(this.idPost, 1, this.postForm.value);
      this.postForm.reset();
      // this.idPost = 0;
    }
}
