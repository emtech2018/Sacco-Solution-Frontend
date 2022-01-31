import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/interfaces/response';
import { GlSubheadsService } from 'src/app/services/gl-subheads.service';

@Component({
  selector: 'app-gl-subheads-delete',
  templateUrl: './gl-subheads-delete.component.html',
  styleUrls: ['./gl-subheads-delete.component.css']
})
export class GlSubheadsDeleteComponent implements OnInit {
  subhead:Response = this.route.snapshot.data['subhead']
  glCode !: string
  glSubheadCode !: string
  glSubheadDescription !: string

  constructor(private route:ActivatedRoute,
    private SubheadService:GlSubheadsService) { }

  ngOnInit(): void {
  }
  

  deleteSubGl(){
    this.subhead.entity.deletedFlag = "Y"
    this.subhead.entity.deletedBy = "Wanjiru"
    this.subhead.entity.deletedTime = new Date()

    this.SubheadService.updateGlSubheadsDefinition(this.subhead.entity).subscribe(
      (data) =>{},
      (error) =>{}
    ),
    console.log("Actioned Complete");
    

  }
}
