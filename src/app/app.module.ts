import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './includes/user-profile/user-profile.component';
import { CartComponent } from './includes/cart/cart.component';

import { HttpClientModule } from "@angular/common/http";
import { ProductItemComponent } from './components/home/product-item/product-item.component';
import { ProductDetailComponent } from './components/home/product-detail/product-detail.component';
import { FilterPipe } from './includes/filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserProfileComponent,
    CartComponent,
   
    ProductItemComponent,
   
    ProductDetailComponent,
   
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
