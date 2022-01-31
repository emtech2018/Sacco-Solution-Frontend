import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
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
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  product!: Product;
  schemeCode!: string;
  productDescription!: string;
  interestBase!: string;
  repaymentBasis!: string;
  processingFee!: number;
  lateRepaymentFee!: number;
  calculationBase!: string;
  repaymentAccount!: string;
  interestCode!: string;
  productType!: String;
  intakeFee!: number;
  solCode!: string;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private productsservice: ProductsService
  ) {
    this.product = {};
  }

  ngOnInit(): void {}

  submitProduct() {
    this.product.schemeCode = this.schemeCode;
    this.product.productDescription = this.productDescription;
    this.product.interestBase = this.interestBase;
    this.product.repaymentBasis = this.repaymentBasis;
    this.product.processingFee = this.processingFee;
    this.product.lateRepaymentFee = this.lateRepaymentFee;
    this.product.calculationBase = this.calculationBase;
    this.product.interestRepaymentAccount = this.repaymentAccount;
    this.product.interestCode = this.interestCode;
    this.product.intakeFee = this.intakeFee;
    this.product.solCode = this.solCode;

    this.product.deletedFlag = 'N';
    this.product.postedFlag = 'Y';
    this.product.postedBy = 'KAMAU';
    this.product.modifiedBy = 'KAMAU';
    this.product.postedTime = new Date();
    this.product.verifiedFlag = 'Y';

    console.log(this.product);

    this.productsservice.createProduct(this.product).subscribe(
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
    );
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
  accountLookup(): void {
    const cdialogRef = this.dialog.open(AccountComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.repaymentAccount = result.data.code;
    });
  }
}
