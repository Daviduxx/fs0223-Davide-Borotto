import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DrinksEditComponent } from './edit/drinks-edit/drinks-edit.component';
import { BurgerEditComponent } from './edit/burger-edit/burger-edit.component';
import { PastaEditComponent } from './edit/pasta-edit/pasta-edit.component';


@NgModule({
  declarations: [
    DashboardComponent,
    EditComponent,
    DrinksEditComponent,
    BurgerEditComponent,
    PastaEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
