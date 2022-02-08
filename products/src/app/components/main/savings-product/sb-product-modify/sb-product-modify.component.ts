import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {Response} from 'src/app/interfaces/response'
import { sbProduct } from 'src/app/interfaces/sb-product';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { SolComponent } from 'src/app/components/lookup/sol/sol.component';
import { InterestComponent } from 'src/app/components/lookup/interest/interest.component';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-sb-product-modify',
  templateUrl: './sb-product-modify.component.html',
  styleUrls: ['./sb-product-modify.component.css']
})
export class SbProductModifyComponent implements OnInit {
  response: Response = this.activeRoute.snapshot.data.product;
  sbproduct: sbProduct=this.response.entity

  constructor(private activeRoute: ActivatedRoute,private router: Router,
    private dialog: MatDialog,
    private productsservice: ProductsService) { }

  ngOnInit(): void {
  }

  updateSb(){
    this.sbproduct.modifiedBy="kamau"
    this.sbproduct.modifiedTime=new Date()

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
      })
  }

  branchLookup(): void {
    const cdialogRef = this.dialog.open(SolComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.sbproduct.solCode = result.data.code;
    });
  }
  interestLookup(): void {
    const cdialogRef = this.dialog.open(InterestComponent, {
      height: '400px',
      width: '600px',
    });
    cdialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
      this.sbproduct.interestCode = result.data.interestCode;
    });
  }
}
