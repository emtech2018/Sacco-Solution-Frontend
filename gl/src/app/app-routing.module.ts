import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlAddComponent } from './components/main/gl/gl-add/gl-add.component';
import { GlDeleteComponent} from 'src/app/components/main/gl/gl-delete/gl-delete.component';
import {GlInquireComponent} from 'src/app/components/main/gl/gl-inquire/gl-inquire.component';
import {GlMainComponent} from 'src/app/components/main/gl/gl-main/gl-main.component';
import {GlModifyComponent} from 'src/app/components/main/gl/gl-modify/gl-modify.component';

const routes: Routes = [
  {path: 'gl', component:GlMainComponent},
  {path: 'gl-add', component:GlAddComponent},
  {path: 'gl-delete', component:GlDeleteComponent},
  {path: 'gl-inquire',component:GlInquireComponent},
  {path: 'gl-modify', component:GlModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
