import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Response} from 'src/app/interfaces/response'
import { odProduct } from 'src/app/interfaces/od-product';

@Component({
  selector: 'app-od-product-inquire',
  templateUrl: './od-product-inquire.component.html',
  styleUrls: ['./od-product-inquire.component.css']
})
export class OdProductInquireComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  odproduct: odProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
