import { Component, OnInit } from '@angular/core';
import { Interest } from 'src/app/interfaces/interest';
import { Slab } from 'src/app/interfaces/slab';

import { InterestService } from 'src/app/services/interest.service';

@Component({
  selector: 'app-interest-add',
  templateUrl: './interest-add.component.html',
  styleUrls: ['./interest-add.component.css'],
})
export class InterestAddComponent implements OnInit {
  interest!: Interest;
  sn!: number;
  interestCode!: string;
  currency!: string;
  startDate!: Date;
  endDate!: Date;
  fullDiff: string="F";
  dlength: number;
  clength: number;

  cfrom!: number
  cto!: number
  crate!: number
  cdrCr: string="C"
  cfslab:Slab={}

  dfrom!: number
  dto!: number
  drate!: number
  ddrCr: string="D"
  dfslab:Slab={}


  dslab: Slab = {};
  dslabs: Slab[] = [];

  cslab: Slab = {};
  cslabs: Slab[] = [];

  // slabs: Slab[]=[]

  constructor(    private interestservice: InterestService) {
    this.interest = { amountSlabs: [] };
    this.cslab = { fromAmount: 0, drCr: 'C' };
    this.dslab = { fromAmount: 0, drCr: 'D' };

    this.dslabs.push(this.dslab);
    this.cslabs.push(this.cslab);

    this.dlength = this.dslabs.length;
    this.clength = this.cslabs.length;
  }

  ngOnInit(): void {}

  removeDSlab() {
    this.dslabs.splice(this.dslabs.length - 1, 1);
    this.dlength = this.dslabs.length;
  }

  removeCSlab() {
    this.cslabs.splice(this.cslabs.length - 1, 1);
    this.clength = this.cslabs.length;
  }

  addDSlab() {
    if (this.dlength == 0) {
      this.dslab = { fromAmount: 0, drCr: 'D' };
      this.dslabs.push(this.dslab);
    } else {
      this.dslab = {
        fromAmount: this.dslabs[this.dslabs.length - 1].toAmount + 1,
        drCr: 'D',
      };
      this.dslabs.push(this.dslab);
    }
    this.dlength = this.dslabs.length;
  }

  addCSlab() {
    if (this.clength == 0) {
      this.cslab = { fromAmount: 0, drCr: 'D' };
      this.cslabs.push(this.cslab);
    } else {
      this.cslab = {
        fromAmount: this.cslabs[this.cslabs.length - 1].toAmount + 1,
        drCr: 'C',
      };
      this.cslabs.push(this.cslab);
    }
    this.clength = this.cslabs.length;
  }

   submitInterest(){
    this.interest.interestCode=this.interestCode
    this.interest.currency=this.currency
    this.interest.fullDiff=this.fullDiff
    this.interest.startDate=this.startDate
    this.interest.endDate=this.endDate

    this.interest.postedBy="KAMAU"
    this.interest.postedFlag= 'Y';
    this.interest.postedTime= new Date()
    this.interest.modifiedBy="KAMAU"
    this.interest.modifiedTime=new Date()
    this.interest.verifiedBy="KAMAU"
    this.interest.verifiedTime=new Date()
    this.interest.verifiedFlag= 'Y';
    this.interest.deletedFlag = 'N';

    if(this.fullDiff=="F"){
      this.cfslab.drCr=this.cdrCr
      this.cfslab.rate=this.crate
      this.cfslab.interestCode=this.interestCode
      this.cfslab.postedBy="KAMAU"
      this.cfslab.modifiedBy="KAMAU"
      this.cfslab.postedTime=new Date()
      this.cfslab.verifiedFlag="Y"
      this.cfslab.postedFlag="Y"
      this.cfslab.deletedFlag="N"
      this.interest.amountSlabs.push(this.cfslab)

      this.dfslab.drCr=this.ddrCr
      this.dfslab.rate=this.drate
      this.dfslab.interestCode=this.interestCode
      this.dfslab.postedBy="KAMAU"
      this.dfslab.modifiedBy="KAMAU"
      this.dfslab.postedTime=new Date()
      this.dfslab.verifiedFlag="Y"
      this.dfslab.postedFlag="Y"
      this.dfslab.deletedFlag="N"
      this.interest.amountSlabs.push(this.dfslab)

    }
    if(this.fullDiff=="D"){
      for (let sl of this.dslabs) {
        sl.interestCode=this.interestCode;
        sl.postedTime=new Date()
        sl.postedBy="KAMAU"; 
        sl.modifiedBy="KAMAU"; 
         sl.verifiedFlag="N"
         sl.postedFlag="Y"
         sl.deletedFlag="N"
   } 

       for (let Csl of this.cslabs) {
        Csl.interestCode=this.interestCode;
        Csl.postedTime=new Date()
        Csl.modifiedBy="KAMAU"; 
        Csl.postedBy="KAMAU"; 
         Csl.verifiedFlag="N"
         Csl.postedFlag="Y"
         Csl.deletedFlag="N"
   } 

      this.interest.amountSlabs= this.dslabs.concat(this.cslabs)
    }

    this.interestservice.createInterest(this.interest).subscribe(

      (data) => {
        console.log(data.message)
      },
      (error) => {

     console.log(error.error.message)
      }
    );

    console.log(this.interest)

   }
}
