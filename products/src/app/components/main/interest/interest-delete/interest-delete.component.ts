import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interest } from 'src/app/interfaces/interest';
import { Slab } from 'src/app/interfaces/slab';
import { InterestService } from 'src/app/services/interest.service';

@Component({
  selector: 'app-interest-delete',
  templateUrl: './interest-delete.component.html',
  styleUrls: ['./interest-delete.component.css']
})
export class InterestDeleteComponent implements OnInit {
  interest: Interest = this.activeRoute.snapshot.data.interest;
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
  }
  deleteInterest(){
    this.interest.deletedFlag="Y"
    this.interest.deletedTime=new Date()
    this.interest.deletedBy="KAMAU"
    console.log(this.interest)

    this.interestservice.updateInterestDefinition(this.interest).subscribe(

      (data) => {
        console.log(data.message)
      },
      (error) => {

     console.log(error.error.message)
      }
    );

  }

}
