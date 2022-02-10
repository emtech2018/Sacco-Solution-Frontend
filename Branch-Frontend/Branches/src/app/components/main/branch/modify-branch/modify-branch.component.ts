import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Branch } from 'src/app/interfaces/branch';
import { Response } from 'src/app/interfaces/response';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-modify-branch',
  templateUrl: './modify-branch.component.html',
  styleUrls: ['./modify-branch.component.css']
})
export class ModifyBranchComponent implements OnInit {
  response: Response = this.route.snapshot.data['branch'];
  branch : Branch = this.response.entity
  branchDescription !: string;
  email !: string;
  location !: string;
  phoneNumber !: string;
  
  constructor(private route:ActivatedRoute,
    private branchService:BranchService,
    private router:Router) { }

  ngOnInit(): void {
  }

  submitBranch(){
    this.branchService.updateBranch(this.branch).subscribe(
      data =>{
        this.router.navigate(['success'],{
          state:{
            message:data.message
          }
        })
        
        console.log("Record Updated");
        
        

      },
      error =>{
        this.router.navigate(['failure'],{
          state:{
            message:error.message
          }
        })
      }
    )

  }

}
