import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Glsubheads } from 'src/app/interfaces/gl-subheads'
import { GlComponent } from 'src/app/components/lookup/gl/gl.component';
import { GlSubheadsService } from 'src/app/services/gl-subheads.service';
import { Gl } from 'src/app/interfaces/gl';
import { Router } from '@angular/router';
//import { GlSubheadsComponent } from 'src/app/components/main/gl-subheads';
@Component({
  selector: 'app-gl-subheads-add',
  templateUrl: './gl-subheads-add.component.html',
  styleUrls: ['./gl-subheads-add.component.css']
})
export class GlSubheadsAddComponent implements OnInit {
  gl !: Gl
  glSubhead !:Glsubheads
  glCode !: string;
  glSubheadCode !: string;
  glSubheadDescription !: string;
  allSubheadCodes : Glsubheads[] = [];
  show :boolean;
  available: boolean = false;

constructor(private glSubheadService:GlSubheadsService,
  private dialogRef:MatDialog,
  private router:Router){
  this.glSubhead = {}
}

  ngOnInit(): void {
    this.glSubheadService.retrieveAllGlSubheadDefinitions().subscribe(
      (data)=>{
         this.allSubheadCodes = data.entity
      },
      (error)=>{}
    )
  }

 


  submitGlSub(){
    this.glSubhead.glCode = this.glCode
    this.glSubhead.glSubheadCode = this.glSubheadCode
    this.glSubhead.glSubheadDescription = this.glSubheadDescription

    this.glSubhead.verifiedBy = "Phell"
    this.glSubhead.verifiedFlag = "Y"
    this.glSubhead.verifiedTime = new Date()

    this.glSubhead.postedBy = "Kamau"
    this.glSubhead.postedFlag = "Y"
    this.glSubhead.postedTime = new Date()

    this.glSubhead.modifiedBy = "Kamau"
    this.glSubhead.modifiedTime = new Date()

    this.glSubhead.deleteFlag = "N"
    this.glSubhead.deletedBy = "Kamau"
    this.glSubhead.deletedTime = new Date()




    for(let gls of this.allSubheadCodes){
      if(this.glSubhead.glSubheadCode == gls.glSubheadCode){
        this.available = true;
        break
      }else{
        this.available = false
      }
    }

    if(this.available == false){
      this.glSubheadService.createGlSubheads(this.glSubhead).subscribe(
        (data) => {
          this.router.navigate(['success'],{
            state:{
              message:data.message,
            },
          });
          console.log(data.message);
          
  
        },
        (error) =>{
          this.router.navigate(['failure'],{
            state:{
              message:error.error.message,
            },
          });
          console.log(error.error.message);
          
  
        }
        ),
       console.log("testing", this.glSubhead);
       
    }
    else{
      this.show=true;
      this.available= false;
    }

    }


    

  glSubheadLookup(): void{
    const dialogRef = this.dialogRef.open(GlComponent,{
      height : '400px',
      width : '600px',
    });
    dialogRef.afterClosed().subscribe((result) =>{
      console.log(result.data);
      this.glCode = result.data.glCode;
  })
}
}
