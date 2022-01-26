
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {CustomerService} from "src/app/services/customer.service"
import {CustomerRegistration} from 'src/app/interfaces/customer-registration'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  isLoadingResults: boolean=true;

       displayedColumns: string[] = ['id', 'ccy'];
  //dataSource = curencies;
    dataSource: MatTableDataSource<CustomerRegistration>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( public dialogRef: MatDialogRef<CustomerComponent>,private customerService: CustomerService) {

        this.customerService.getCustomers("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLQU1BVSIsImlhdCI6MTY0MjM1ODU4NywiZXhwIjoxNjQyNDQ0OTg3fQ.yVvCVONkeroe-osd-nMAbtwD9PETvsErkbozhrylngTAeU1U76LqNj8NyWC7XbVISwqKEvT-qSevQC_2BE4_TQ").subscribe(
      data => {     
      this.isLoadingResults=false;      
        this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
        console.log(data);
      },
      error=>{
      }
    )

    // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(curencies);
   
   }

  ngOnInit(): void {

  }

applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    onSelect(data:any){
    this.dialogRef.close({ event: 'close', data:data });
  }

  //   closeDialog() {
  //   this.dialogRef.close({ event: 'close', data: this.fromDialog });
  // }
}


