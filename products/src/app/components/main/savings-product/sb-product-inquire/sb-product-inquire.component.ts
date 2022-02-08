import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Response} from 'src/app/interfaces/response'
import { sbProduct } from 'src/app/interfaces/sb-product';

@Component({
  selector: 'app-sb-product-inquire',
  templateUrl: './sb-product-inquire.component.html',
  styleUrls: ['./sb-product-inquire.component.css']
})
export class SbProductInquireComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  sbproduct: sbProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.sbproduct)
  }

}
