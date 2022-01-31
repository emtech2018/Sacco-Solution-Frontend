import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Response} from 'src/app/interfaces/response'
import { GlService } from 'src/app/services/gl.service';

@Component({
  selector: 'app-gl-delete',
  templateUrl: './gl-delete.component.html',
  styleUrls: ['./gl-delete.component.css']
})
export class GlDeleteComponent implements OnInit {
  gl:Response = this.activeroute.snapshot.data['gl']
  glcode !:string;
  glDescription !: string;

  constructor(private activeroute:ActivatedRoute, private glService:GlService) { }

  ngOnInit(): void {
  }

  deleteGl(){
  
    this.gl.entity.deletedFlag = "Y";
    this.gl.entity.deletedTime = new Date();
    this.gl.entity.deletedBy = "Wanjiru";

    this.glService.updateGlDefinition(this.gl.entity).subscribe(

    ) 
  }

}
