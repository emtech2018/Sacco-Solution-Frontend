import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-param-add',
  templateUrl: './param-add.component.html',
  styleUrls: ['./param-add.component.css']
})
export class ParamAddComponent implements OnInit {
  acceptMinors!: string
  checkWithCreditBureau!: string
  minorMinimumAge!: number
  registrationFee!: number

  constructor() { }

  ngOnInit(): void {
  }

  paramSave(){
    
  }

}
