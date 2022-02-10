import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBranchComponent } from './components/main/branch/main-branch/main-branch.component';
import { AddBranchComponent } from './components/main/branch/add-branch/add-branch.component';
import { DeleteBranchComponent } from './components/main/branch/delete-branch/delete-branch.component';
import { ModifyBranchComponent } from './components/main/branch/modify-branch/modify-branch.component';
import { InquireBranchComponent } from './components/main/branch/inquire-branch/inquire-branch.component';
import { BranchResolver } from './resolvers/branch.resolver';


import { FailureComponent } from './components/status/failure/failure.component';
import { SuccessComponent } from './components/status/success/success.component';

const routes: Routes = [
  {path:'branch', component:MainBranchComponent},
  {path: 'add-branch', component:AddBranchComponent},
  {path: 'inquire-branch/:id', component:InquireBranchComponent, resolve:{branch:BranchResolver}},
  {path: 'modify-branch/:id', component:ModifyBranchComponent, resolve:{branch:BranchResolver}},
  {path: 'delete-branch/:id', component:DeleteBranchComponent,resolve:{branch:BranchResolver}},


  {path:'failure', component:FailureComponent},
  {path:'success', component:SuccessComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
