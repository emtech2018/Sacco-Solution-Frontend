import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tdProduct } from 'src/app/interfaces/td-product';
import {Response} from 'src/app/interfaces/response'

@Component({
  selector: 'app-td-product-inquire',
  templateUrl: './td-product-inquire.component.html',
  styleUrls: ['./td-product-inquire.component.css']
})
export class TdProductInquireComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  tdproduct: tdProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
