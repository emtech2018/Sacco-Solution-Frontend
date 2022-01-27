import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource}  from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';

import { Gl } from 'src/app/interfaces/gl';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GlService } from 'src/app/services/gl.service';
@Component({
  selector: 'app-gl',
  templateUrl: './gl.component.html',
  styleUrls: ['./gl.component.css']
})
export class GlComponent implements OnInit {

  isLoadingResults : boolean = true;
  displayedColumns : string[] = ['code', 'description'];
  
  dataSource !: MatTableDataSource<Gl>;
  
  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort !: MatSort;


  constructor(
  public dialogRef: MatDialogRef<GlComponent>,
  private glService: GlService
  ) {
    this.glService.retrieveAllGlDefinitions().subscribe(
      (data) =>{
        this.isLoadingResults = false;
        console.log(data)
        this.dataSource = new MatTableDataSource(data.entity.t);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(data);
      },
      (error) => {}
      
    )
    
   }

  ngOnInit(): void {}
  

  applyFilter( event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if(this.dataSource.paginator){
        this.dataSource.paginator.firstPage();
      }
    

  }
  onSelect(data:any){
    this.dialogRef.close({event: 'close', data: data})

  }


}
