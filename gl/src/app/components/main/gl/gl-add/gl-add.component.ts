import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Gl} from 'src/app/interfaces/gl' ;
import { GlComponent } from 'src/app/components/lookup/gl/gl.component';
import { GlService } from 'src/app/services/gl.service';
@Component({
  selector: 'app-gl-add',
  templateUrl: './gl-add.component.html',
  styleUrls: ['./gl-add.component.css']
})
export class GlAddComponent implements OnInit {
  gl !: Gl
  glCode !: string;
  glDescription !: string;
  

  constructor( private glservice:GlService,
    private dialogRef:MatDialog) {
     this.gl = {};
   }

  ngOnInit(): void {
  }
 submitGl(){
   this.gl.glCode = this.glCode
   this.gl.glDescription = this.glDescription
   
   this.gl.deleteFlag = "N"
   this.gl.deletedBy = "Kamau"
   this.gl.deletedTime =new Date()

   this.gl.modifiedBy = "Kamau"
   this.gl.modifiedTime = new Date()

   this.gl.postedBy = "Kamau"
   this.gl.postedFlag = "Y"
   this.gl.postedTime = new Date()

   this.gl.verifiedBy = "Kamau"
   this.gl.verifiedFlag = "Y"
   this.gl.deletedTime = new Date()

   this.glservice.createGl(this.gl).subscribe(
     (data) =>{
       console.log(data.message);
       
     }, 
     (error) =>{
       console.log(error.error.message);
       
     }
  
    ),
    console.log("test",this.glCode);
    

 }
 


  
 
}
