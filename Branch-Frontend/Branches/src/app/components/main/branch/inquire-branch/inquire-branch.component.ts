import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-inquire-branch',
  templateUrl: './inquire-branch.component.html',
  styleUrls: ['./inquire-branch.component.css']
})
export class InquireBranchComponent implements OnInit {
branch : Response = this.route.snapshot.data['branch']
  constructor(private route:ActivatedRoute) {
    console.log(this.branch);
    console.log("record found");
    
    
   }

  ngOnInit(): void {
  }
  
  

}
