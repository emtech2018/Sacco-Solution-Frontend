import { Component, OnInit } from '@angular/core';
import { sbProduct } from 'src/app/interfaces/sb-product';
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
  selector: 'app-sb-product-add',
  templateUrl: './sb-product-add.component.html',
  styleUrls: ['./sb-product-add.component.css']
})
export class SbProductAddComponent implements OnInit {

  sbproduct!: sbProduct

  acctStatementFrequency!: Date
  dormantFeeCharge!: number
  drBalanceLimit!: number
  durationFromDormancyToInactivity!: number
  durationToInactivity!: number
  extraWithdrawalFee!: number
  inactiveFeeCharge!: number
  interestCode!: string
  interestMethod!: string
  ledgerFee!: number
  minimumBalanceWithCheque!: number
  noOfWithdrawals!: number
  schemeCode!: string
  solCode!: string
  productDescription!: string

  constructor(    
    private router: Router,
    private dialog: MatDialog,
    private productsservice: ProductsService
    ) { 
    this.sbproduct={}
  }

  ngOnInit(): void {
  }
  saveSavings(){


    this.sbproduct.acctStatementFrequency=this.acctStatementFrequency
    this.sbproduct.dormantFeeCharge=this.dormantFeeCharge
    this.sbproduct.drBalanceLimit=this.drBalanceLimit
    this.sbproduct.durationFromDormancyToInactivity=this.durationFromDormancyToInactivity
    this.sbproduct.durationToInactivity=this.durationToInactivity
    this.sbproduct.extraWithdrawalFee=this.extraWithdrawalFee
    this.sbproduct.inactiveFeeCharge=this.inactiveFeeCharge
    this.sbproduct.interestCode=this.interestCode
    this.sbproduct.interestMethod="C"
    this.sbproduct.ledgerFee=this.ledgerFee
    this.sbproduct.minimumBalanceWithCheque=this.minimumBalanceWithCheque
    this.sbproduct.noOfWithdrawals=this.noOfWithdrawals
    this.sbproduct.schemeCode=this.schemeCode
    this.sbproduct.solCode=this.solCode

    this.sbproduct.postedBy="KAMAU"
    this.sbproduct.postedFlag="Y"
    this.sbproduct.postedTime= new Date()
    this.sbproduct.modifiedBy="kamau"
    this.sbproduct.modifiedTime=new Date()
    this.sbproduct.deletedFlag="N"
    console.log(this.sbproduct)

    this.productsservice.createSbProduct(this.sbproduct).subscribe(
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
  // accountLookup(): void {
  //   const cdialogRef = this.dialog.open(AccountComponent, {
  //     height: '400px',
  //     width: '600px',
  //   });
  //   cdialogRef.afterClosed().subscribe((result) => {
  //     console.log(result.data);
  //     this.repaymentAccount = result.data.code;
  //   });
  // }

}
