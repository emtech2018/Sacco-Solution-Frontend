import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Branch } from 'src/app/interfaces/branch';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  isLoadingResults : boolean = true;
  displayedColumns : String[] = ['code', 'description']

  dataSource !:MatTableDataSource<Branch>

  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort !: MatSort;

  constructor(public dialogRef:MatDialogRef<BranchComponent>,
    public branchService:BranchService) { 

      this.branchService.retrieveAllBranches().subscribe(
        data =>{
          this.isLoadingResults = false;
          this.dataSource = new MatTableDataSource(data.entity)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error =>{
          console.log(error);
          
        }
      )
    }

  ngOnInit(): void {
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }

  }

  onSelect(data:any){
    this.dialogRef.close({event :'close', data: data})

  }

}
