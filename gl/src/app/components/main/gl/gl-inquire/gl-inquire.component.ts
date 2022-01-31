import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/interfaces/response';

@Component({
  selector: 'app-gl-inquire',
  templateUrl: './gl-inquire.component.html',
  styleUrls: ['./gl-inquire.component.css']
})
export class GlInquireComponent implements OnInit {
  gl:Response = this.route.snapshot.data['gl'];
  glCode !: string;
  glDescription !: string;
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.gl);
    
  }
 

}
