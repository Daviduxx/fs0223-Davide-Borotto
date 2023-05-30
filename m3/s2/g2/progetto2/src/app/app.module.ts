import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active/active.component';
import { DisactivatedComponent } from './home/disactivated/disactivated/disactivated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActiveComponent,
    DisactivatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
