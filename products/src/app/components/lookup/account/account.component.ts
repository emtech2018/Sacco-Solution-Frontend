import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface Account {
  code?: string;
  description?: string;
}


const accounts: Account[] = [
  {code: "A001", description: 'TEST1', },
  {code: "A002", description: 'TEST2', },
  {code: "A003", description: 'TEST3', },
  {code: "A004", description: 'TEST4', },
  {code: "A005", description: 'TEST5', },
];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['code', 'description'];
  // dataSource = branches;
  dataSource: MatTableDataSource<Account>;
  
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(public dialogRef: MatDialogRef<AccountComponent>) { 

    this.dataSource = new MatTableDataSource(accounts);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
}
