import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  public cartItemCount:number = 0
  public cartItems: []
  public GrandTotalAmt:number
  constructor(private _cart : CartService) { }

  ngOnInit() {
      this._cart.productList.subscribe(
      res =>{
         this.cartItems =  res;
      }
    )

    this.GrandTotalAmt = this._cart.grand_total
   
  }

  ngDoCheck(){
    this.cartItemCount = this._cart.cartItemList.length;

  }
  removeItem(i:number){
    console.log("Remove Item "+i)
    this._cart.removeItemFromCart(i)
  }

  emptyCart(){
    console.log("Empty Cart");
    this._cart.emptyCart();
  }
}
