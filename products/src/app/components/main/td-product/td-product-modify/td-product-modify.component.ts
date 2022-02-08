import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tdProduct } from 'src/app/interfaces/td-product';
import {Response} from 'src/app/interfaces/response'
import {ProductsService} from 'src/app/services/products.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-td-product-modify',
  templateUrl: './td-product-modify.component.html',
  styleUrls: ['./td-product-modify.component.css']
})
export class TdProductModifyComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  tdproduct: tdProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute, private productservice:ProductsService,private router: Router) { }

  ngOnInit(): void {
  }

  tdModify(){
    this.tdproduct.modifiedBy="kamau"
    this.tdproduct.modifiedTime= new Date()
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
