import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import {Response} from 'src/app/interfaces/response'

@Component({
  selector: 'app-product-inquire',
  templateUrl: './product-inquire.component.html',
  styleUrls: ['./product-inquire.component.css']
})
export class ProductInquireComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  product: Product=this.response.entity

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.product)
  }

}
