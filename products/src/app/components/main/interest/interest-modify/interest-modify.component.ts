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
  dlength: number
  clength: number
  cSlabs: Slab[]=[]
  dSlabs: Slab[]=[]

  constructor(private activeRoute: ActivatedRoute, private interestservice: InterestService) { }

  ngOnInit(): void {
    for (let csl of this.interest.amountSlabs) {
      if(csl.drCr=="D"){
        this.dSlabs.push(csl)
      }
      else{
        this.cSlabs.push(csl)
      }
    }
    this.dlength=this.dSlabs.length
    this.clength=this.cSlabs.length

    console.log(this.dSlabs)
    console.log(this.cSlabs)
  }

  updateInterest(){
    
  }

}
