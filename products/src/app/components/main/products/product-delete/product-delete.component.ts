import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import {Response} from 'src/app/interfaces/response'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  product: Product=this.response.entity

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  productDelete(){

    console.log("test")
  }

}
