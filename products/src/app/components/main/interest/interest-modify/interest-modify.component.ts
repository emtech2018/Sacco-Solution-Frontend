import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interest } from 'src/app/interfaces/interest';
import { Slab } from 'src/app/interfaces/slab';
import { InterestService } from 'src/app/services/interest.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-interest-modify',
  templateUrl: './interest-modify.component.html',
  styleUrls: ['./interest-modify.component.css']
})
export class InterestModifyComponent implements OnInit {
  interest: Interest = this.activeRoute.snapshot.data.interest;
  dlength: number
  clength: number

  
  dslab: Slab = {};
  dSlabs: Slab[] = [];

  cslab: Slab = {};
  cSlabs: Slab[] = [];



  constructor(private activeRoute: ActivatedRoute, private interestservice: InterestService, private router: Router) { }

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



  removeDSlab() {
    this.dSlabs.splice(this.dSlabs.length - 1, 1);
    this.dlength = this.dSlabs.length;
  }

  removeCSlab() {
    this.cSlabs.splice(this.cSlabs.length - 1, 1);
    this.clength = this.cSlabs.length;
  }

  addDSlab() {
    if (this.dlength == 0) {
      this.dslab = { fromAmount: 0, drCr: 'D' };
      this.dSlabs.push(this.dslab);
    } else {
      this.dslab = {
        fromAmount: this.dSlabs[this.dSlabs.length - 1].toAmount + 1,
        drCr: 'D',
      };
      this.dSlabs.push(this.dslab);
    }
    this.dlength = this.dSlabs.length;
  }

  addCSlab() {
    if (this.clength == 0) {
      this.cslab = { fromAmount: 0, drCr: 'D' };
      this.cSlabs.push(this.cslab);
    } else {
      this.cslab = {
        fromAmount: this.cSlabs[this.cSlabs.length - 1].toAmount + 1,
        drCr: 'C',
      };
      this.cSlabs.push(this.cslab);
    }
    this.clength = this.cSlabs.length;
  }

  updateInterest(){

    console.log("d", this.dSlabs)
    console.log("c", this.cSlabs)

    this.interest.amountSlabs=this.dSlabs.concat(this.cSlabs)
    console.log(this.interest)

    this.interestservice.updateInterestDefinition(this.interest).subscribe(

      (data) => {
        this.router.navigate(['success'], {
          state: {
            message: data.message,
          },
        });
      },
      (error) => {
        this.router.navigate(['failure'], {
          state: {
            message: error.error.message,
          },
        });
      }

    )
    
  }

}
