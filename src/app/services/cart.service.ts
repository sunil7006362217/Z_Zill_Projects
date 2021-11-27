import { NgIf } from '@angular/common';
import { Injectable } from '@angular/core';
import { RSA_NO_PADDING } from 'constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<any>([]);
  public grand_total : number
  public isexist : Boolean = false
  public index : number;
  // totalPrice : Number = 0;
  // itemTotal : Number;
  // public search = new BehaviorSubject<string>("");
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(item : any):void{
    let i = 0;
    for(let arrItem of this.cartItemList){
      this.index = i;
      i++;
      if(arrItem.id === item.id){
        this.isexist = true
        
        let qty = arrItem.qty + item.qty
                let total = item.price * qty;
                item = {...item,'qty':qty,'total_amt':total}
     
        break;
      }else{
        this.isexist = false
      }
    }

    if(this.isexist){
      console.log("index",this.index)
            this.cartItemList.splice(this.index,1)
            this.cartItemList.push(item)
            this.productList.next(this.cartItemList);
            this.getTotal(this.cartItemList)
    }else{
      this.cartItemList.push(item)
      this.productList.next(this.cartItemList);
      this.getTotal(this.cartItemList)
    }

        // if(this.cartItemList.length > 0){

        //   this.cartItemList.map((res:any, ind:any) => {
        //       if(res.id === item.id){
        //         let qty =res.qty + item.qty
        //         let total = item.price * qty;
        //         item = {...item,'qty':qty,'total_amt':total}
        //         console.log("If : Qty",qty)
        //         console.log(ind)
        //         this.index = ind
        //         this.isexist = true
        //         this.cartItemList.push(item)
        //         // this.productList.next(this.cartItemList);
        //       }
        //   })

        //     if(this.isexist){
        //       console.log("index",this.index)
        //       this.cartItemList.pop(this.index)
        //       this.cartItemList.push(item)
        //       this.productList.next(this.cartItemList);
        //       this.getTotal(this.cartItemList)
           
        //     }else{
        //       this.cartItemList.push(item)
        //       this.productList.next(this.cartItemList);
        //       console.log("else",this.cartItemList)
        //       this.getTotal(this.cartItemList)
        //     }
        //  console.log(this.cartItemList)

        // }else{
        //   this.cartItemList.push(item)
        //   this.productList.next(this.cartItemList);
        //   console.log("else",this.cartItemList)
        //   this.getTotal(this.cartItemList)
        // }
        
  }

  getTotal(list){
    let getTotal = 0;
    list.map(res => {
      console.log(res.price);
      // res.price = res.qty * res.price;
      getTotal =  getTotal + res.total_amt;
      console.log(getTotal)
      this.grand_total = getTotal

    })
  }

  emptyCart(){
    this.cartItemList = [];
  }
  
  removeItemFromCart(index){
    this.cartItemList.splice(index,1)

  }

  searchStart(list){
    this.search.next(list)
  }
}
