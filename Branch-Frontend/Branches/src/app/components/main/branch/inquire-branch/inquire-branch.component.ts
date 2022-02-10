import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Branch } from 'src/app/interfaces/branch';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-inquire-branch',
  templateUrl: './inquire-branch.component.html',
  styleUrls: ['./inquire-branch.component.css']
})
export class InquireBranchComponent implements OnInit {
response : Response = this.route.snapshot.data['branch']
branch:Branch = this.response.entity


  constructor(private route:ActivatedRoute) {
    console.log(this.branch);
    console.log("record found");
    
    
   }

  ngOnInit(): void {
  }
  
  

}
