import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import {ProductComponent} from 'src/app/components/lookup/product/product.component'
import {SbProductComponent} from 'src/app/components/lookup/sb-product/sb-product.component'
import {TdProductComponent} from 'src/app/components/lookup/td-product/td-product.component'
import {OdProductComponent} from 'src/app/components/lookup/od-product/od-product.component'

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {
  productTypeTabIndex: number = 1 ;
  productTabIndex: number = 1 ;

  schemeCode: string;
  schemeDescription: string;

  constructor(private router: Router,private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  onTabClick(value: any){
    this.productTypeTabIndex = value.target.value;
   
}
 onAccountTabClick(value: any){
    this.productTabIndex = value.target.value;
   
}

navigate(){
  //loan product
  if (this. productTypeTabIndex == 1 && this.productTabIndex==1) {
    this.router.navigate(['loan-product-add']);
  }
  if (this. productTypeTabIndex == 1 && this. productTabIndex == 2) {
    this.router.navigate(['loan-product-inquire',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 1 && this. productTabIndex == 3) {
    this.router.navigate(['loan-product-modify',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 1 && this. productTabIndex == 4) {
    this.router.navigate(['loan-product-delete',this.schemeCode]);
  }
  //td product
  if (this. productTypeTabIndex == 4 && this. productTabIndex == 1) {
    this.router.navigate(['td-product-add']);
  }
  if (this. productTypeTabIndex == 4 && this. productTabIndex == 2) {
    this.router.navigate(['td-product-inquire',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 4 && this. productTabIndex == 3) {
    this.router.navigate(['td-product-modify',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 4 && this. productTabIndex == 4) {
    this.router.navigate(['td-product-delete',this.schemeCode]);
  }
  //od product
  if (this. productTypeTabIndex == 3 && this. productTabIndex == 1) {
    this.router.navigate(['od-product-add']);
  }
  if (this. productTypeTabIndex == 3 && this. productTabIndex == 2) {
    this.router.navigate(['od-product-inquire',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 3 && this. productTabIndex == 3) {
    this.router.navigate(['od-product-modify',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 3 && this. productTabIndex == 4) {
    this.router.navigate(['od-product-delete',this.schemeCode]);
  }

  //sb product
  if (this. productTypeTabIndex == 2 && this. productTabIndex == 1) {
    this.router.navigate(['sb-product-add']);
  }
  if (this. productTypeTabIndex == 2 && this. productTabIndex == 2) {
    this.router.navigate(['sb-product-inquire',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 2 && this. productTabIndex == 3) {
    this.router.navigate(['sb-product-modify',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 2 && this. productTabIndex == 4) {
    this.router.navigate(['sb-product-delete',this.schemeCode]);
  }

}

productLookup(): void {
  const cdialogRef = this.dialog.open(ProductComponent, {
    height: '400px',
    width: '600px',
  });
  cdialogRef.afterClosed().subscribe((result) => {
    console.log(result.data);
    this.schemeCode = result.data.schemeCode;
    this.schemeDescription=result.data.productDescription
  });
}

tdproductLookup(): void {
  const cdialogRef = this.dialog.open(TdProductComponent, {
    height: '400px',
    width: '600px',
  });
  cdialogRef.afterClosed().subscribe((result) => {
    console.log(result.data);
    this.schemeCode = result.data.schemeCode;
    this.schemeDescription=result.data.productDescription
  });
}

odproductLookup(): void {
  const cdialogRef = this.dialog.open(OdProductComponent, {
    height: '400px',
    width: '600px',
  });
  cdialogRef.afterClosed().subscribe((result) => {
    console.log(result.data);
    this.schemeCode = result.data.schemeCode;
    this.schemeDescription=result.data.productDescription
  });
}

sbproductLookup(): void {
  const cdialogRef = this.dialog.open(SbProductComponent, {
    height: '400px',
    width: '600px',
  });
  cdialogRef.afterClosed().subscribe((result) => {
    console.log(result.data);
    this.schemeCode = result.data.schemeCode;
    this.schemeDescription=result.data.productDescription
  });
}

}
