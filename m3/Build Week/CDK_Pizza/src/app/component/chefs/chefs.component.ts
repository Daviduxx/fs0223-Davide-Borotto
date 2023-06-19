import { Component, OnInit } from '@angular/core';
import { UserBerlusconi } from 'src/app/interfaces/user-berlusconi';
import { PizzeService } from 'src/app/pizze.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit{

  chef:UserBerlusconi[] = []

  constructor ( private pizzeSVC:PizzeService) {}

  ngOnInit(){
    this.pizzeSVC.getChef().subscribe(c => {
      console.log(c);
      this.chef = c
    })
  }
}
