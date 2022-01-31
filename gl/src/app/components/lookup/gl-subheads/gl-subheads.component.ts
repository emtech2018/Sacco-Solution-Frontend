import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Gl} from 'src/app/interfaces/gl'
import { GlService } from 'src/app/services/gl.service';
import { GlComponent } from '../gl/gl.component';
import { GlSubheadsService } from 'src/app/services/gl-subheads.service';
import { Glsubheads } from 'src/app/interfaces/gl-subheads';
// import { Event } from '@angular/router';
@Component({
  selector: 'app-gl-subheads',
  templateUrl: './gl-subheads.component.html',
  styleUrls: ['./gl-subheads.component.css']
})
export class GlSubheadsComponent implements OnInit {
 
  isLoadingResults :boolean = true;
  displayedColumns : string[] =['code','description'];

  dataSource !:MatTableDataSource<Glsubheads>
  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort !: MatSort;


 
  
  constructor(private SubheadService:GlSubheadsService,
    public dialogRef:MatDialogRef<GlSubheadsComponent>) {
      this.SubheadService.retrieveAllGlSubheadDefinitions().subscribe(
        (data) =>{
          this.isLoadingResults = false;
          this.dataSource = new MatTableDataSource(data.entity);
          this.dataSource.paginator = this.dataSource.paginator;
          this.dataSource.sort = this.dataSource.sort
  
  
        },
        (error) =>{}
      )
    
   }

  ngOnInit(): void {}
  
  onSelect(data:any){
    this.dialogRef.close({event: 'close', data: data})
    

  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();

  }
}
}
