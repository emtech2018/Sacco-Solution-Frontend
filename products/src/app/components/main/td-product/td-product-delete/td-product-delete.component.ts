import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tdProduct } from 'src/app/interfaces/td-product';
import {Response} from 'src/app/interfaces/response'
import {ProductsService} from 'src/app/services/products.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-td-product-delete',
  templateUrl: './td-product-delete.component.html',
  styleUrls: ['./td-product-delete.component.css']
})
export class TdProductDeleteComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  tdproduct: tdProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute, private productservice:ProductsService,private router: Router) { }

  ngOnInit(): void {
  }
tdDelete(){
  this.tdproduct.deletedBy="kamau"
  this.tdproduct.deletedFlag="Y"
  this.tdproduct.deletedTime= new Date()
  this.productservice.updateTdProduct(this.tdproduct).subscribe(
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
