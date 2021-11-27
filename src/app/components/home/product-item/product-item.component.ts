import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpApiCallService } from 'src/app/services/http-api-call.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

 
  Item: {}
  @Input() item = ''; 
  P_ID : number;
  constructor(private _api : HttpApiCallService, private route : ActivatedRoute) { }

  ngOnInit() {
  this.Item = this.item
  

  }

}
