import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interfaces/response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gl-subheads-inquire',
  templateUrl: './gl-subheads-inquire.component.html',
  styleUrls: ['./gl-subheads-inquire.component.css']
})
export class GlSubheadsInquireComponent implements OnInit {
  subhead:Response = this.route.snapshot.data['subhead'];
  glCode !: string
  glSubheadCode !: string
  glSubheadDescription !: string


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
