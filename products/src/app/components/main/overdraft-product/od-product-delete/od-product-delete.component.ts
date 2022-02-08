import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Response} from 'src/app/interfaces/response'
import { odProduct } from 'src/app/interfaces/od-product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-od-product-delete',
  templateUrl: './od-product-delete.component.html',
  styleUrls: ['./od-product-delete.component.css']
})
export class OdProductDeleteComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  odproduct: odProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute,private router: Router,
    private productsservice: ProductsService) { }

  ngOnInit(): void {
  }
  odDelete(){
    this.odproduct.deletedBy="kamau"
    this.odproduct.deletedFlag="Y"
    this.odproduct.deletedTime=new Date()

    this.productsservice.updateOdProduct(this.odproduct).subscribe(

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
