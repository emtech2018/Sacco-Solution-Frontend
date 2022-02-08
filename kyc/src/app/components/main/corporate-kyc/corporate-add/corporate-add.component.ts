import { Component, OnInit } from '@angular/core';
import {corporateKyc} from 'src/app/interfaces/corporate'
import {CustomerService} from 'src/app/services/customer.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-corporate-add',
  templateUrl: './corporate-add.component.html',
  styleUrls: ['./corporate-add.component.css']
})
export class CorporateAddComponent implements OnInit {
  corporate!: corporateKyc

  contactPersonName!: string
  corporateSegment!: string
  custCode!: string
  headOffice!: string
  inCorporationDate!: Date
  joiningDate!: Date
  kraPin!: string
  legalEntityType!: string
  organisationName!: string
  region!: string
  registrationPin!: string
  shortName!: string
  subSegment!: string

  constructor(private customerservice: CustomerService, private router: Router) {
    this.corporate={}
   }

  ngOnInit(): void {
  }
  addCorporate(){
    this.corporate.contactPersonName=this.contactPersonName
    this.corporate.corporateSegment=this.corporateSegment
    this.corporate.headOffice=this.headOffice
    this.corporate.inCorporationDate=this.inCorporationDate
    this.corporate.joiningDate=new Date()
    this.corporate.kraPin=this.kraPin
    this.corporate.legalEntityType=this.legalEntityType
    this.corporate.organisationName=this.organisationName
    this.corporate.region=this.region
    this.corporate.registrationPin=this.registrationPin
    this.corporate.shortName=this.shortName
    this.corporate.subSegment=this.subSegment

    this.customerservice.createCorporate(this.corporate).subscribe(
      
      (data) => {
        this.router.navigate(['success'], {
          state: {
            message: data.message,
          },
        });
        console.log(data.message);
      },
      (error) => {
        this.router.navigate(['failure'], {
          state: {
            message: error.error.message,
          },
        });

        console.log(error.error.message);
      }

    )

    


  }

}
