import { Component, Inject, OnInit,ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {LoanAccountService} from '../loan-account.service'


export interface  account {
  acid: String;
  accountName: String;
}

@Component({
  selector: 'app-loan-account-lookup',
  templateUrl: './loan-account-lookup.component.html',
  styleUrls: ['./loan-account-lookup.component.css']
})
export class LoanAccountLookupComponent implements OnInit {
  isLoadingResults: boolean = true;
  displayedColumns: string[] = ['code', 'description'];
  dataSource: MatTableDataSource<account>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialogRef: MatDialogRef<LoanAccountLookupComponent>,private accountService: LoanAccountService,@Inject(MAT_DIALOG_DATA) data ) { 
    this.accountService.retrieveAllAccounts(data.type).subscribe(
      (data) => {
        this.isLoadingResults = false;
        //console.log(data.entity)
        this.dataSource = new MatTableDataSource(data.entity);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      (error) => {}
    );
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

  onSelect(data: any) {
    this.dialogRef.close({ event: 'close', data: data });
  }

}
