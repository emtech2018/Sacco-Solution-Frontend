import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Gl } from 'src/app/interfaces/gl';
import { Response } from 'src/app/interfaces/response';
import { GlService } from 'src/app/services/gl.service';
@Component({
  selector: 'app-gl-modify',
  templateUrl: './gl-modify.component.html',
  styleUrls: ['./gl-modify.component.css']
})
export class GlModifyComponent implements OnInit {
  // gl : Response = this.route.snapshot.data['gl'];
  gl :Response = this.route.snapshot.data['gl'];
  // glCode !: string;
  // glDescription !: string;

  

  constructor( private route:ActivatedRoute, 
    private glService:GlService,
    private dialogRef:MatDialog,
    private router:Router) {
   
    
   }

  ngOnInit(): void { 
  }
  
  submitGl(){
   this.glService.updateGlDefinition(this.gl.entity).subscribe(
     (data) =>{
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
         }
       });
     }
   );
    //  console.log(this.glCode);
     
  }

}
