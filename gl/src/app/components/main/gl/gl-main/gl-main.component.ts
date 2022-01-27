import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { GlComponent } from 'src/app/components/lookup/gl/gl.component';
import {MatDialog} from '@angular/material/dialog';
import {Gl} from 'src/app/interfaces/gl';

@Component({
  selector: 'app-gl-main',
  templateUrl: './gl-main.component.html',
  styleUrls: ['./gl-main.component.css']
})
export class GlMainComponent implements OnInit {

  glTabIndex: number = 1;
  glTabCode: number = 1;
  glCode !: string

  constructor(private router:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  onTabClick(value: any ){
    this.glTabIndex = value.target.value;
    
}
onLevelTabClick(value:any){
  this.glTabCode = value.target.value
}

navigate(){
  if (this.glTabIndex == 1 && this.glTabCode == 1) {
    this.router.navigate(['gl-add']);
  }
  if (this.glTabIndex == 2 && this.glTabCode == 1) {
    this.router.navigate(['gl-inquire', this.glCode]);
  }
  if (this.glTabIndex == 3 && this.glTabCode == 1) {
    this.router.navigate(['gl-modify', this.glCode]);
  }
  if (this.glTabIndex == 4 && this.glTabCode == 1) {
    this.router.navigate(['gl-delete', this.glCode]);
  }
}

glLookup(): void{
  const cdialogRef = this.dialog.open(GlComponent,{
    height: '400px',
    width: '600px',
  });
  cdialogRef.afterClosed().subscribe((result) =>{
    console.log(result.data);
    this.glCode = result.data.glCode
    
  })

}

}
