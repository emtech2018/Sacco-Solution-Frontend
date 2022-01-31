import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gl-subheads-main',
  templateUrl: './gl-subheads-main.component.html',
  styleUrls: ['./gl-subheads-main.component.css']
})
export class GlSubheadsMainComponent implements OnInit {

  glTabIndex : number =1;
  glCode !:string;
  glTabCode: number =1;
  router: any;


  constructor() { }

  ngOnInit(): void {
  }
onTabClick(value:any){

}
onLevelTabClick(value:any){

}
glLookup(){

}
navigate(){

  if (this.glTabIndex == 1 && this.glTabCode == 2) {
    this.router.navigate(['gl-subhead-add']);
}
if (this.glTabIndex == 2 && this.glTabCode == 2) {
  this.router.navigate(['gl-subhead-inquire']);
}
if (this.glTabIndex == 2 && this.glTabCode == 2) {
  this.router.navigate(['gl-subhead-modify']);
}
if (this.glTabIndex == 2 && this.glTabCode == 2) {
  this.router.navigate(['gl-subhead-delete']);
}

}
}
