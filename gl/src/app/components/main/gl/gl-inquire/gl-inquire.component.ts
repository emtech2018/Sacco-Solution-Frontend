import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { GlService } from 'src/app/services/gl.service';

@Component({
  selector: 'app-gl-inquire',
  templateUrl: './gl-inquire.component.html',
  styleUrls: ['./gl-inquire.component.css']
})
export class GlInquireComponent implements OnInit {
  gl:Response = this.route.snapshot.data['gl'];
  glCode !: string;
  glDescription !: string;
  constructor( private route:ActivatedRoute,
    private glservice:GlService,
    private router:Router) { }

  ngOnInit(): void {
    console.log(this.gl);
    
  }
  SubmitGl(){
    this.glservice.updateGlDefinition(this.gl.entity).subscribe(
      (data) =>{
        this.router.navigate(['success'],{
          state:{
            message:data.message
          }
        });
      },
      (error) => {
        this.router.navigate(['failure'],{
          state:{
            message:error.error.message
          }
        });
      }

    )
  }
 

}
