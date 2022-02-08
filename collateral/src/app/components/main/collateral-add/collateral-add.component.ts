import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collateral-add',
  templateUrl: './collateral-add.component.html',
  styleUrls: ['./collateral-add.component.css']
})
export class CollateralAddComponent implements OnInit {
  chargeEventForLodging!: string
  chargeEventForWithdrawal!: string
  collateralCode!: string
  collateralType!: string
  companyCode!: string
  companyDetails!: string
  contactDetails!: string
  customerCode!: string
  description!: string
  faceValue!: number
  //margin!: number
  marketValue!: number
  //otherDetails!: string
  percentageDrawingPower!: number
  //percentageLoanToTake!: number
  shareCapital!: number
  sharesIssued!: number


 constructor() { }

  ngOnInit(): void {
  }

  submitCollateral(){
    
  }

}
