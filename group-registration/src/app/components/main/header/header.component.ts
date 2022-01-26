import { Component, OnInit } from '@angular/core';
import { CustomerRegistration } from 'src/app/interfaces/customer-registration';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   customers!: CustomerRegistration[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getCustomers(){
    this.customerService.getCustomers("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLQU1BVSIsImlhdCI6MTY0MjM1ODU4NywiZXhwIjoxNjQyNDQ0OTg3fQ.yVvCVONkeroe-osd-nMAbtwD9PETvsErkbozhrylngTAeU1U76LqNj8NyWC7XbVISwqKEvT-qSevQC_2BE4_TQ").subscribe(
      data => {           
        this.customers=data
        console.log(data);
      },
      error=>{
      }
    )
  }
}
