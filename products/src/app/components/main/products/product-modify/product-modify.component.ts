import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { Response } from 'src/app/interfaces/response';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { SolComponent } from 'src/app/components/lookup/sol/sol.component';
import { InterestComponent } from 'src/app/components/lookup/interest/interest.component';
import { AccountComponent } from 'src/app/components/lookup/account/account.component';

import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css'],
})
export class ProductModifyComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  product: Product = this.response.entity;

  constructor(
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private productsservice: ProductsService
  ) {}

  ngOnInit(): void {}
  modifyProduct() {
    this.productsservice.updateProduct(this.product).subscribe(
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
      this.product.solCode = result.data.code;
    });
  }
  interestLookup(): void {
    const cdialogRef = this.dialog.open(InterestComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.product.interestCode = result.data.interestCode;
    });
  }
  accountLookup(): void {
    const cdialogRef = this.dialog.open(AccountComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.product.interestRepaymentAccount = result.data.code;
    });
  }
}
