import { Component } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    constructor( private fb:FormBuilder, private AuthSVC:AuthService){}

    postArr:IPost[] = []
    postForm!:FormGroup;
    changeMod:boolean = false;
    idPost:number = 0;

    ngOnInit(){
      this.AuthSVC.getPost().subscribe(res => {
        this.postArr = res;
        console.log(this.postArr);

      }),
      this.postForm = this.fb.group({
        title: this.fb.control(null,[Validators.required]),
        subtitle: this.fb.control(null,[Validators.required]),
        content: this.fb.control(null,[Validators.required]),
    })
    }

    write(){
      this.AuthSVC.writePost(this.postForm.value).subscribe(p => {
        console.log(p);

        this.ngOnInit()
      })
    }

    delete(id:number, i:number){
      this.AuthSVC.deletePost(id).subscribe();
      this.postArr.splice(i, 1)
    }

    changeForm(i:number){
      this.postForm = this.fb.group({
        title: this.fb.control(this.postArr[i].title,[Validators.required]),
        subtitle: this.fb.control(this.postArr[i].subtitle,[Validators.required]),
        content: this.fb.control(this.postArr[i].content,[Validators.required]),
    })
    this.changeMod = true;
    this.idPost = i + 1;
    }

    change(){
      this.AuthSVC.changePost(this.postForm.value, this.idPost).subscribe(p => console.log(p))
      this.changeMod = false;
      this.postArr.splice(this.idPost, 1, this.postForm.value);
      this.postForm.reset();
      this.idPost = 0;
    }
}
