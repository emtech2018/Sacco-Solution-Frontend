import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Sol} from 'src/app/interfaces/sol'

export interface Branch {
  code?: string;
  description?: string;
}

const branches: Branch[] = [
  {code: "SOO1", description: 'THIKA', },
  {code: "SOO2", description: 'KIAMBU', },
  {code: "SOO3", description: 'LIMURU', },
  {code: "SOO4", description: 'MURANGA', },
  {code: "SOO5", description: 'NAIROBI', },
];

@Component({
  selector: 'app-sol',
  templateUrl: './sol.component.html',
  styleUrls: ['./sol.component.css']
})
export class SolComponent implements OnInit {
  isLoadingResults: boolean=true;


  displayedColumns: string[] = ['code', 'description'];
// dataSource = branches;
dataSource: MatTableDataSource<Branch>;


@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(  public dialogRef: MatDialogRef<SolComponent>) { 
    this.dataSource = new MatTableDataSource(branches);
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
