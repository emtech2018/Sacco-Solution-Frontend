import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Response} from 'src/app/interfaces/response'
import { sbProduct } from 'src/app/interfaces/sb-product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sb-product-delete',
  templateUrl: './sb-product-delete.component.html',
  styleUrls: ['./sb-product-delete.component.css']
})
export class SbProductDeleteComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  sbproduct: sbProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute,private router: Router,
    private productsservice: ProductsService) { }

  ngOnInit(): void {
  }

  deleteSb(){
    this.sbproduct.deletedFlag="Y"
    this.productsservice.updateSbProduct(this.sbproduct).subscribe(
      (data) => {
        this.router.navigate(['success'], {
          state: {
            message: data.message,
          },
        });
        console.log(data.message);
      },
      (error) => {
        this.router.navigate(['failure'], {
          state: {
            message: error.error.message,
          },
        });

        console.log(error.error.message);
      }

    )

    

  }

}
