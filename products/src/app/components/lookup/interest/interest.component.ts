import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Interest } from 'src/app/interfaces/interest';
import { InterestService } from 'src/app/services/interest.service';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css'],
})
export class InterestComponent implements OnInit {
  isLoadingResults: boolean = true;
  displayedColumns: string[] = ['code', 'description'];
  // dataSource = branches;
  dataSource: MatTableDataSource<Interest>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef<InterestComponent>,
    private interestService: InterestService
  ) {
    this.interestService.retrieveAllInterestDefinitions().subscribe(
      (data) => {
        this.isLoadingResults = false;
        console.log(data.entity)
        this.dataSource = new MatTableDataSource(data.entity.t);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      (error) => {}
    );
  }

  ngOnInit(): void {}

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
