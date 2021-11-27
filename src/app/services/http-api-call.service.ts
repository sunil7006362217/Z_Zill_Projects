import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpApiCallService {

  constructor(private _http : HttpClient) { }

  getProductCat(){
    return this._http.get<any>("https://fakestoreapi.com/products/categories");
  }

  getProductListAccToCat(category){
    return this._http.get<any>("https://fakestoreapi.com/products/category/"+category);
  }

  getProductDetail(id){
    return this._http.get<any>("https://fakestoreapi.com/products/"+id);
  }
  getProductList(){
    return this._http.get<any>("https://fakestoreapi.com/products");
  }

  search(){
    return this._http.get<any>("https://fakestoreapi.com/products");
  }
}
