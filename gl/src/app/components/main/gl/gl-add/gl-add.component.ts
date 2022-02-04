import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Gl} from 'src/app/interfaces/gl' ;
import { GlComponent } from 'src/app/components/lookup/gl/gl.component';
import { GlService } from 'src/app/services/gl.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gl-add',
  templateUrl: './gl-add.component.html',
  styleUrls: ['./gl-add.component.css']
})
export class GlAddComponent implements OnInit {
  gl !: Gl;
  allgl : Gl[]=[]; 
  glCode !: string;
  glDescription !: string;
  available: boolean=false;
  show: boolean=false;
  
  //  String[= this.gl.glCode
  // userForm: any;
  // formBuilder: any;

  constructor( private glservice:GlService,
    private dialogRef:MatDialog,
    private router:Router) {
     this.gl = {};
     
     
     
   }

  ngOnInit(): void {
  this.glservice.retrieveAllGlDefinitions().subscribe(
    data=>{
      this.allgl=data.entity
    },
    error=>{

    }
  )
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



   for(let gls of this.allgl){
     if(this.gl.glCode == gls.glCode){
       
      this.available = true;
      break
     }
     else{
       this.available = false;
     }
   }

console.log("chege",this.available)
console.log("phel",this.gl)

   if(this.available == false){
    this.glservice.createGl(this.gl).subscribe(
      (data) =>{
        this.router.navigate(['success'],{
          state:{
            message:data.message,
          }
 
        });
        console.log(data.message);
        
        
      }, 
      (error) =>{
        this.router.navigate(['failure'],
        {
          state:{
            message:error.error.message,
          }
        });
        console.log(error.error.message);
        
        
        
      }
   
     ),
     console.log("test",this.glCode);
     

   }
   else{
     this.show=true;
     this.available=false;
   }







   

 }



 }
 


  
 

