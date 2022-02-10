import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { BranchComponent } from 'src/app/components/lookup/branch/branch.component';
@Component({
  selector: 'app-main-branch',
  templateUrl: './main-branch.component.html',
  styleUrls: ['./main-branch.component.css']
})
export class MainBranchComponent implements OnInit {
  branchTabIndex :number = 1;
  branchTabCode : number =1;
  solCode !: string;
  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onClick(value:any){
    this.branchTabIndex = value.target.value

  }
 
  navigate(){

    if(this.branchTabIndex == 1){
      this.router.navigate(['add-branch']);
    }
    if(this.branchTabIndex == 2){
      this.router.navigate(['inquire-branch', this.solCode])
    }
    if(this.branchTabIndex == 3){
      this.router.navigate(['modify-branch', this.solCode]);
    }
    if(this.branchTabIndex == 4){
      this.router.navigate(['delete-branch', this.solCode])
    }

  }

  branchLookup(): void{
    const cdialogRef = this.dialog.open(BranchComponent,{
      height : '400px',
      width : '600px'

    });
    cdialogRef.afterClosed().subscribe((result) =>{
      console.log(result.data);
      this.solCode = result.data.solCode
      
    })

  }

}
