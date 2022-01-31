import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Glsubheads } from 'src/app/interfaces/gl-subheads'
import { GlComponent } from 'src/app/components/lookup/gl/gl.component';
import { GlSubheadsService } from 'src/app/services/gl-subheads.service';
import { Gl } from 'src/app/interfaces/gl';
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

constructor(private glSubheadService:GlSubheadsService,
  private dialogRef:MatDialog){
  this.glSubhead = {}
}

  ngOnInit(): void {
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


    this.glSubheadService.createGlSubheads(this.glSubhead).subscribe(
      (data) => {

      },
      (error) =>{

      }
      ),
     console.log("testing", this.glSubhead);
     
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
