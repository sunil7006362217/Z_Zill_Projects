import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { HttpApiCallService } from 'src/app/services/http-api-call.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit  {
  P_ID : number
  P_Detail : any
  Qty : number = 1;
  constructor(private _api: HttpApiCallService, private route : ActivatedRoute,
     private _cart : CartService) { 

   
  }


  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      this.P_ID = res['p_id']
      console.log(this.P_ID);
      this._api.getProductDetail(this.P_ID).subscribe(res => {
        console.log(res)
        this.P_Detail = res;
      });
     
    })
   
  }

  incQty(qty:any){
   
      qty =  parseInt(qty.value) + 1;
   
    
    console.log(qty);
    
    this.Qty = qty;
  }

  descQty(qty:any){
    qty =  parseInt(qty.value) - 1;
    if(qty <= 0){
      qty = 1;
    }
   
    console.log(qty);
    this.Qty = qty;
  }

  addToCartDetailPage(item,qty){
    console.log(item);
    let total_amt = this.Qty * item.price;
    item = {...item, 'qty':this.Qty,'total_amt':total_amt}
    this._cart.addToCart(item)
   
    console.log(this._cart.productList)
    console.log( this._cart.grand_total)
      
  }

}
