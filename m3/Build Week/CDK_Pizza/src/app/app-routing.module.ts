import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartComponent } from './component/cart/cart.component';
import { StewardGuard } from './steward.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'sign-in',
    component: RegisterComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },


  { path: 'dashboard',
    canActivate:[StewardGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



