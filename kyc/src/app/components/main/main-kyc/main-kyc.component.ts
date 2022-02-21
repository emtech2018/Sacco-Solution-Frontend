import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-kyc',
  templateUrl: './main-kyc.component.html',
  styleUrls: ['./main-kyc.component.css']
})
export class MainKycComponent implements OnInit {
  customerTypeTabIndex: number = 1 ;
  customerTabIndex: number = 1 ;

  customerCode: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onTabClick(value: any){
    this.customerTypeTabIndex = value.target.value;
   
}
 onKycTabClick(value: any){
    this.customerTabIndex = value.target.value;
   
}
param(){
  this.router.navigate(['param']);
}
navigate(){
  if (this. customerTypeTabIndex == 1 && this.customerTabIndex==1) {
    this.router.navigate(['retail-add']);
  }
  if (this. customerTypeTabIndex == 1 && this. customerTabIndex == 2) {
    this.router.navigate(['retail-inquire',this.customerCode]);
  }
  if (this. customerTypeTabIndex == 1 && this. customerTabIndex == 3) {
    this.router.navigate(['retail-modify',this.customerCode]);
  }
  if (this. customerTypeTabIndex == 1 && this. customerTabIndex == 4) {
    this.router.navigate(['retail-delete',this.customerCode]);
  }

  if (this. customerTypeTabIndex == 2 && this.customerTabIndex==1) {
    this.router.navigate(['corporate-add']);
  }
  if (this. customerTypeTabIndex == 2 && this. customerTabIndex == 2) {
    this.router.navigate(['corporate-inquire',this.customerCode]);
  }
  if (this. customerTypeTabIndex == 2 && this. customerTabIndex == 3) {
    this.router.navigate(['corporate-modify',this.customerCode]);
  }
  if (this. customerTypeTabIndex == 2 && this. customerTabIndex == 4) {
    this.router.navigate(['corporate-delete',this.customerCode]);
  }
}
}
