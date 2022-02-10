import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-delete-branch',
  templateUrl: './delete-branch.component.html',
  styleUrls: ['./delete-branch.component.css']
})
export class DeleteBranchComponent implements OnInit {
  branch:Response = this.route.snapshot.data['branch']
  constructor(private route:ActivatedRoute,
    private branchService:BranchService,
    private router:Router) { }

  ngOnInit(): void {
  }

  deleteBranch(){
    this.branch.entity.deletedFlag = "Y";
    this.branch.entity.deletedBy = "Wanj";
    this.branch.entity.deletedTime = new Date();
    console.log(this.branch);
    
    this.branchService.updateBranch(this.branch.entity).subscribe(
      data =>{
        this.router.navigate(['success'],{
          state:{
            message:data.message
          }
        })

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
