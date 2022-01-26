import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {
  productTypeTabIndex: number = 1 ;
  productTabIndex: number = 1 ;

  schemeCode: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTabClick(value: any){
    this.productTypeTabIndex = value.target.value;
   
}
 onAccountTabClick(value: any){
    this.productTabIndex = value.target.value;
   
}

navigate(){
  if (this. productTypeTabIndex == 1 && this.productTabIndex==1) {
    this.router.navigate(['product-add']);
  }
  if (this. productTypeTabIndex == 1 && this. productTabIndex == 2) {
    this.router.navigate(['product-inquire',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 1 && this. productTabIndex == 3) {
    this.router.navigate(['product-modify',this.schemeCode]);
  }
  if (this. productTypeTabIndex == 1 && this. productTabIndex == 4) {
    this.router.navigate(['product-delete',this.schemeCode]);
  }

}

}
