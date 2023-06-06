import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  // non è obbligatorio, è semplicemente un modo diverso per accedere al form, in questo caso lato ts
  @ViewChild('form') form!:NgForm


  onSubmit(form:NgForm){
    // accedo al form lato html
    console.log(form);
    console.log(form.form.value);

    // Metodo built in di ng per svuotare il form al submit
    this.form.reset()
  }

}
