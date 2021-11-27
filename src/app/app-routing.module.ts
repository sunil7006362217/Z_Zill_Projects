import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './includes/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

import { UserProfileComponent } from './includes/user-profile/user-profile.component';
import { ProductDetailComponent } from './components/home/product-detail/product-detail.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},

  {path:"user-profile",component:UserProfileComponent},
  {path:"product-detail",component:ProductDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
