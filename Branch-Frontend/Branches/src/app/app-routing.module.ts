import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBranchComponent } from './components/main/branch/main-branch/main-branch.component';
import { AddBranchComponent } from './components/main/branch/add-branch/add-branch.component';
import { DeleteBranchComponent } from './components/main/branch/delete-branch/delete-branch.component';
import { ModifyBranchComponent } from './components/main/branch/modify-branch/modify-branch.component';
import { InquireBranchComponent } from './components/main/branch/inquire-branch/inquire-branch.component';


const routes: Routes = [
  {path:'branch', component:MainBranchComponent},
  {path: 'add', component:AddBranchComponent},
  {path: 'delete', component:DeleteBranchComponent},
  {path: 'modify', component:ModifyBranchComponent},
  {path: 'inquire', component:InquireBranchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
