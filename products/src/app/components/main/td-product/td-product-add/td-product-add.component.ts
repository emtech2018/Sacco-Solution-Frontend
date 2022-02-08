import { Component, OnInit } from '@angular/core';
import { tdProduct } from 'src/app/interfaces/td-product';

import { SolComponent } from 'src/app/components/lookup/sol/sol.component';
import { InterestComponent } from 'src/app/components/lookup/interest/interest.component';

import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-td-product-add',
  templateUrl: './td-product-add.component.html',
  styleUrls: ['./td-product-add.component.css']
})
export class TdProductAddComponent implements OnInit {
  tdproduct!: tdProduct
  interestCode!: string
  maximumPeriod!: number
  minimumPeriod!: number
  schemeCode!: string
  solCode!: string
  productDescription!: string


  constructor(    private router: Router,
    private dialog: MatDialog,
    private productsservice: ProductsService) { 
    this.tdproduct={}
  }

  ngOnInit(): void {
  }
  tdSave(){
    this.tdproduct.interestCode=this.interestCode
    this.tdproduct.maximumPeriod=this.maximumPeriod
    this.tdproduct.minimumPeriod-this.minimumPeriod
    this.tdproduct.postedBy="kmaua"
    this.tdproduct.postedFlag="Y"
    this.tdproduct.modifiedBy="kamau"
    this.tdproduct.modifiedTime=new Date()
    this.tdproduct.deletedFlag="N"
    this.tdproduct.postedTime= new Date()
    this.tdproduct.schemeCode=this.schemeCode
    this.tdproduct.solCode=this.solCode
    this.tdproduct.productDescription=this.productDescription

    this.productsservice.createTdProduct(this.tdproduct).subscribe(
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
      this.solCode = result.data.code;
    });
  }
  interestLookup(): void {
    const cdialogRef = this.dialog.open(InterestComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.interestCode = result.data.interestCode;
    });
  }

}
