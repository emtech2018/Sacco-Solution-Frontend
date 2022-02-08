import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SolComponent } from 'src/app/components/lookup/sol/sol.component';
import { InterestComponent } from 'src/app/components/lookup/interest/interest.component';

import {Response} from 'src/app/interfaces/response'
import { odProduct } from 'src/app/interfaces/od-product';

import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-od-product-modify',
  templateUrl: './od-product-modify.component.html',
  styleUrls: ['./od-product-modify.component.css']
})
export class OdProductModifyComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  odproduct: odProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute,private router: Router,
    private dialog: MatDialog,
    private productsservice: ProductsService) { }

  ngOnInit(): void {
  }
  odModify(){

    this.odproduct.modifiedBy="kamau"
    this.odproduct.modifiedTime=new Date()
    
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
  branchLookup(): void {
    const cdialogRef = this.dialog.open(SolComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.odproduct.solCode = result.data.code;
    });
  }
  interestLookup(): void {
    const cdialogRef = this.dialog.open(InterestComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.odproduct.interestCode = result.data.interestCode;
    });
  }

}
