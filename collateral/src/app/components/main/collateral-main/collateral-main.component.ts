import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-collateral-main',
  templateUrl: './collateral-main.component.html',
  styleUrls: ['./collateral-main.component.css']
})
export class CollateralMainComponent implements OnInit {
  collateralTabIndex: number = 1 ;
  collateralCode: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onTabClick(value: any){
    this.collateralTabIndex = value.target.value;  
}

  navigate(){
    if (this. collateralTabIndex == 1) {
      this.router.navigate(['collateral-add']);
    }
  
    if (this. collateralTabIndex == 2) {
      this.router.navigate(['collateral-inquire']);
    }
    if (this. collateralTabIndex == 3) {
      this.router.navigate(['collateral-modify']);
    }
    if (this. collateralTabIndex == 4) {
      this.router.navigate(['collateral-delete']);
    }
  }


}
