import { Component, OnInit } from '@angular/core';
import { subGroup } from "src/app/interfaces/subgroup";
import { Group } from "src/app/interfaces/group";
import { CustomerComponent } from "src/app/components/lookups/customer/customer.component"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group!: Group;
  subGroup!: subGroup
  allowedMembers!: number;
  chairperson!: string;
  firstMeeting!: Date;
  formationDate!: Date;
  groupAddress!: string;
  groupCode!: string;
  groupEMail!: string;
  groupName!: string
  groupStatus!: string;
  maxAllowedSubGroups!: number;
  meetingPlace!: string;
  secretary!: string;
  subGroups: subGroup[]=[];
  treasurer!: string;

  constructor(    private dialog: MatDialog,) {
this.group={};
this.subGroup={}
this.subGroups.push(this.subGroup)
   }

  ngOnInit(): void {
  }

  submitGroup(){
  this.group.groupEMail=this.groupEMail;
  this.group.treasurer=this.treasurer;
  this.group.secretary=this.secretary;
  this.group.chairperson=this.chairperson;
  this.group.groupCode=this.groupCode;
  this.group.groupName=this.groupName;
  this.group.groupStatus=this.groupStatus;
  this.group.maxAllowedSubGroups=this.maxAllowedSubGroups;
  this.group.meetingPlace=this.meetingPlace;
  this.group.firstMeeting=this.firstMeeting;
  this.group.groupAddress=this.groupAddress;
  this.group.formationDate=this.formationDate;
  this.group.allowedMembers=this.allowedMembers;
  
console.log(this.group);
  }


  chbivsmLookup(): void {
    const cdialogRef = this.dialog.open(CustomerComponent, {
      height: '400px',
       width: '600px',
    });
    cdialogRef.afterClosed().subscribe(result => {
      console.log(result.data)
      this.chairperson = result.data.customerCode;

      //this.formData.controls.int_tbl_code.setValue(result.data);
    });
  }
    shbivsmLookup(): void {
    const sdialogRef = this.dialog.open(CustomerComponent, {
      height: '400px',
       width: '600px',
    });
    sdialogRef.afterClosed().subscribe(result => {
      console.log(result.data)

      this.secretary = result.data.customerCode;
 
      //this.formData.controls.int_tbl_code.setValue(result.data);
    });
  }
    thbivsmLookup(): void {
    const tdialogRef = this.dialog.open(CustomerComponent, {
      height: '400px',
       width: '600px',
    });
    tdialogRef.afterClosed().subscribe(result => {
      console.log(result.data)

      this.treasurer = result.data.customerCode;
      //this.formData.controls.int_tbl_code.setValue(result.data);
    });
  }
addSubGroup(){
this.subGroup={}
this.subGroups.push(this.subGroup)
}

}
