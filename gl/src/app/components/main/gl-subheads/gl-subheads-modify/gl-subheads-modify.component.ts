import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { GlSubheadsService } from 'src/app/services/gl-subheads.service';

@Component({
  selector: 'app-gl-subheads-modify',
  templateUrl: './gl-subheads-modify.component.html',
  styleUrls: ['./gl-subheads-modify.component.css']
})
export class GlSubheadsModifyComponent implements OnInit {
  subhead:Response= this.route.snapshot.data['subhead']

  glCode !:string
  glSubheadCode !: string
  glSubheadDescription !: string
  constructor(private route:ActivatedRoute,
    private SubheadService:GlSubheadsService) { }

  ngOnInit(): void {
  }
  submitSubGl(){
    this.SubheadService.updateGlSubheadsDefinition(this.subhead.entity).subscribe(
      (data) =>{
        console.log("Complete");
        
      },
      (error) =>{}
      );
    

  }

}
