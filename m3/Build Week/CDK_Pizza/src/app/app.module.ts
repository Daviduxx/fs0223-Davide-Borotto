import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodDrinkComponent } from './component/food-drink/food-drink.component';
import { CounterComponent } from './component/counter/counter.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { OurBlogComponent } from './component/our-blog/our-blog.component';
import { ChefsComponent } from './component/chefs/chefs.component';
import { OurServiceComponent } from './component/our-service/our-service.component';
import { OurMenuPricingComponent } from './component/our-menu-pricing/our-menu-pricing.component';
import { HotPizzaMealsComponent } from './component/hot-pizza-meals/hot-pizza-meals.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './component/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodDrinkComponent,
    CounterComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    OurBlogComponent,
    ChefsComponent,
    OurServiceComponent,
    OurMenuPricingComponent,
    HotPizzaMealsComponent,
    RegisterComponent,
    MenuComponent,
    ServicesComponent,
    AboutComponent,
    ContactUsComponent,
    HomePageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
