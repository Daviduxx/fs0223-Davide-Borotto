import { PastaEditComponent } from './edit/pasta-edit/pasta-edit.component';
import { BurgerEditComponent } from './edit/burger-edit/burger-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EditComponent } from './edit/edit.component';
import { DrinksEditComponent } from './edit/drinks-edit/drinks-edit.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'edit/:id', component: EditComponent},
  { path: 'editDrink/:id', component: DrinksEditComponent},
  { path: 'editBurgers/:id', component: BurgerEditComponent},
  { path: 'editPasta/:id', component:PastaEditComponent},
  { path: 'home', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
