import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,DoCheck {
  public cartItemCount:number=0;
  constructor(private _cart : CartService) { }

  ngOnInit() {
    this.cartItemCount =  this._cart.cartItemList.length + 1
    // console.log("Cart Count",this.cartItemCount)
  }
  // ngOnChanges(){
  //   console.log("Cart Count",this.cartItemCount)

  // }
  // ngAfterViewInit(){
  //   console.log("Cart Count",this.cartItemCount)
  // }
  ngDoCheck(){
    this.cartItemCount =  this._cart.cartItemList.length 
    console.log("Cart Count",this.cartItemCount)
  }
  // ngAfterViewChecked(){
  //   // this.cartItemCount =  this._cart.cartItemList.length 
  //   // console.log("Cart Count",this.cartItemCount)
  // }
  

}
