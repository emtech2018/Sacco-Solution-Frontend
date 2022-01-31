import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlAddComponent } from './components/main/gl/gl-add/gl-add.component';
import { GlDeleteComponent} from 'src/app/components/main/gl/gl-delete/gl-delete.component';
import {GlInquireComponent} from 'src/app/components/main/gl/gl-inquire/gl-inquire.component';
import {GlMainComponent} from 'src/app/components/main/gl/gl-main/gl-main.component';
import {GlModifyComponent} from 'src/app/components/main/gl/gl-modify/gl-modify.component';
import {GlSubheadsAddComponent} from 'src/app/components/main/gl-subheads/gl-subheads-add/gl-subheads-add.component';
import { GlSubheadsInquireComponent } from './components/main/gl-subheads/gl-subheads-inquire/gl-subheads-inquire.component';
import { GlSubheadsModifyComponent } from './components/main/gl-subheads/gl-subheads-modify/gl-subheads-modify.component';
import { GlSubheadsDeleteComponent } from './components/main/gl-subheads/gl-subheads-delete/gl-subheads-delete.component';

//resolver
import { GlResolver } from './resolvers/gl.resolver';
import {GlSubheadsResolver} from 'src/app/resolvers/gl-subheads.resolver'

const routes: Routes = [
  {path: 'gl', component:GlMainComponent},
  {path: 'gl-add', component:GlAddComponent},
  {path: 'gl-inquire/:id',component:GlInquireComponent, resolve:{gl:GlResolver}},
  {path: 'gl-delete/:id', component:GlDeleteComponent, resolve: {gl:GlResolver}},
  {path: 'gl-modify/:id', component:GlModifyComponent, resolve:{gl:GlResolver}},

  {path: 'gl', component:GlMainComponent},
  {path: 'gl-subheads-add', component:GlSubheadsAddComponent},
  {path: 'gl-subheads-inquire/:id',component:GlSubheadsInquireComponent, resolve:{subhead:GlSubheadsResolver}},
  {path: 'gl-subheads-delete/:id', component:GlSubheadsDeleteComponent, resolve: {subhead:GlSubheadsResolver}},
  {path: 'gl-subheads-modify/:id', component:GlSubheadsModifyComponent, resolve:{subhead:GlSubheadsResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
