import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Branch } from 'src/app/interfaces/branch';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  branch !:Branch
  allBranch: Branch[] =[]
  solCode !: string;
  branchDescription !: string;
  email !:string;
  phoneNumber !:string;
  location !: string;
  show : boolean = false
  available : boolean = false

  constructor(private branchService:BranchService,
   private dialogRef:MatDialog, 
   private router:Router ) { 
    this.branch = {};
   }
  


  ngOnInit(): void {
    this.branchService.retrieveAllBranches().subscribe(
      data =>{
        this.allBranch = data.entity;
      },
      error =>{}
    )
    
  }

  submitBranch(){

    this.branch.solCode = this.solCode
    this.branch.branchDescription = this.branchDescription
    this.branch.email = this.email
    this.branch.location = this.location
    this.branch.phoneNumber = this.phoneNumber
    
    this.branch.deletedBy = "Wanjiru";
    this.branch.deletedTime = new Date();
    this.branch.deletedFlag = "N";

    this.branch.postedBy = 'Wanjiru';
    this.branch.postedTime = new Date();
    this.branch.postedFlag = "Y";

    this.branch.modifiedBy = "Phell";
    this.branch.modifiedTime = new Date();
    
    this.branch.verifiedBy = "phell";
    this.branch.verifiedTime = new Date();
    this.branch.verifiedFlag = "Y"

    
    for(let branches of this.allBranch){
      if(this.branch.solCode == branches.solCode){
        this.available = true;
        break
      }else{
        this.available = false;
      }
    }

    if(this.available == false){
      this.branchService.createBranch(this.branch).subscribe(
        data =>{
          this.router.navigate(['success'],
          {
            state:{
              message:data.message,
            }
          })
          console.log("Submitted");
          
        },
        error =>{
          this.router.navigate(['failure'],{
            state:{
              message:error.message,
            }
          })
        }
      )
    }

    else{
      this.show =true;
      this.available = false;
    }


  }

}
