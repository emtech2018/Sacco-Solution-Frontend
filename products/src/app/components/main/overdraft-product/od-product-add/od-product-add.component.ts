import { Component, OnInit } from '@angular/core';
import { odProduct } from 'src/app/interfaces/od-product';

import { SolComponent } from 'src/app/components/lookup/sol/sol.component';
import { InterestComponent } from 'src/app/components/lookup/interest/interest.component';
import { AccountComponent } from 'src/app/components/lookup/account/account.component';

import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';


@Component({
  selector: 'app-od-product-add',
  templateUrl: './od-product-add.component.html',
  styleUrls: ['./od-product-add.component.css']
})
export class OdProductAddComponent implements OnInit {
  odproduct!: odProduct
  dormantFee!: number
  drBalanceLimit!: number
  inactiveFee!: number
  inactiveToDormantDuration!: number
  interestCode!: string
  ledgerFee!: number
  maxPenalInterest!: number
  maxSanctionLimit!: number
  schemeCode!: string
  solCode!: string
  toInactiveDuration!: number
  productDescription!: string

  constructor(  private router: Router,
    private dialog: MatDialog,
    private productsservice: ProductsService) { 
    this.odproduct={}
  }

  ngOnInit(): void {
  }
  odSave(){
    this.odproduct.dormantFee=this.dormantFee
    this.odproduct.drBalanceLimit=this.drBalanceLimit
    this.odproduct.inactiveFee=this.inactiveFee
    this.odproduct.productDescription=this.productDescription
    this.odproduct.inactiveToDormantDuration=this.inactiveToDormantDuration
    this.odproduct.interestCode=this.interestCode
    this.odproduct.ledgerFee=this.ledgerFee
    this.odproduct.maxPenalInterest=this.maxPenalInterest
    this.odproduct.maxSanctionLimit=this.maxSanctionLimit
    this.odproduct.modifiedBy="kamau"
    this.odproduct.modifiedTime=new Date
    this.odproduct.postedBy="Kamau"
    this.odproduct.postedFlag="Y"
    this.odproduct.deletedFlag='N'
    this.odproduct.postedTime=new Date
    this.odproduct.schemeCode=this.schemeCode
    this.odproduct.solCode=this.solCode
    this.odproduct.toInactiveDuration=this.toInactiveDuration

    this.productsservice.createOdProduct(this.odproduct).subscribe(

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
