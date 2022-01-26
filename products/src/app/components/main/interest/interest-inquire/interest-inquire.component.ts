import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interest } from 'src/app/interfaces/interest';
import { Slab } from 'src/app/interfaces/slab';


@Component({
  selector: 'app-interest-inquire',
  templateUrl: './interest-inquire.component.html',
  styleUrls: ['./interest-inquire.component.css']
})
export class InterestInquireComponent implements OnInit {
  interest: Interest = this.activeRoute.snapshot.data.interest;
  cSlabs: Slab[]=[]
  dSlabs: Slab[]=[]

  constructor(private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    for (let csl of this.interest.amountSlabs) {
      if(csl.drCr=="D"){
        this.dSlabs.push(csl)
      }
      else{
        this.cSlabs.push(csl)
      }
    }
    
  }

}
