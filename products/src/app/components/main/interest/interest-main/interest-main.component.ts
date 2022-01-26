import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interest } from 'src/app/interfaces/interest';
import {InterestService} from 'src/app/services/interest.service'
import { InterestComponent } from 'src/app/components/lookup/interest/interest.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-interest-main',
  templateUrl: './interest-main.component.html',
  styleUrls: ['./interest-main.component.css']
})
export class InterestMainComponent implements OnInit {
  interestTabIndex: number = 1 ;
  interestCode: string;

  constructor(private router: Router,private interestService: InterestService,private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  onTabClick(value: any){
    this.interestTabIndex = value.target.value;
   
}

navigate(){

  if (this. interestTabIndex == 1) {
    this.router.navigate(['interest-add']);
  }

  if (this. interestTabIndex == 2) {
    this.router.navigate(['interest-inquire',this.interestCode]);
  }
  if (this. interestTabIndex == 3) {
    this.router.navigate(['interest-modify',this.interestCode]);
  }
  if (this. interestTabIndex == 4) {
    this.router.navigate(['interest-delete',this.interestCode]);
  }

}

interestLookup(): void {
  const cdialogRef = this.dialog.open(InterestComponent, {
    height: '400px',
    width: '600px',
  });
  cdialogRef.afterClosed().subscribe((result) => {
    console.log(result.data);
    this.interestCode = result.data.interestCode;
  });
}

}
