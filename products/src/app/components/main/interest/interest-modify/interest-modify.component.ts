import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interest } from 'src/app/interfaces/interest';
import { Slab } from 'src/app/interfaces/slab';
import { InterestService } from 'src/app/services/interest.service';

@Component({
  selector: 'app-interest-modify',
  templateUrl: './interest-modify.component.html',
  styleUrls: ['./interest-modify.component.css']
})
export class InterestModifyComponent implements OnInit {
  interest: Interest = this.activeRoute.snapshot.data.interest;
  cSlabs: Slab[]=[]
  dSlabs: Slab[]=[]

  constructor(private activeRoute: ActivatedRoute, private interestservice: InterestService) { }

  ngOnInit(): void {
  }
  updateInterest(){
    
  }

}
