import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { HttpApiCallService } from 'src/app/services/http-api-call.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ProductList : []
  searchKey:String = ""
  Category:[]
  constructor(private _api :HttpApiCallService, private _cart : CartService) { 
    

    this._api.getProductCat().subscribe(res => {
      this.Category = res;
      console.log(this.Category)
    })
  }

  ngOnInit() {
    

  }

  search(val){
    this.getList()
    this.searchKey = val.value;
    // console.log(val);
    // this.cartService.search.next(this.searchTerm);
  }

  category(cat_key){
    this._api.getProductListAccToCat(cat_key)
    .subscribe( res => {
      console.log(res);
      this.ProductList = res
     
      
    })
  }

  getList(){
    this._api.getProductList().subscribe( res => {
      console.log(res);
      this.ProductList = res;
      
    })
  }
}
