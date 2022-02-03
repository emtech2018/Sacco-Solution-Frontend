import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CollateralMainComponent} from 'src/app/components/main/collateral-main/collateral-main.component'
import {CollateralAddComponent} from 'src/app/components/main/collateral-add/collateral-add.component'
import {CollateralInquireComponent} from 'src/app/components/main/collateral-inquire/collateral-inquire.component'
import {CollateralModifyComponent} from 'src/app/components/main/collateral-modify/collateral-modify.component'
import {CollateralDeleteComponent} from 'src/app/components/main/collateral-delete/collateral-delete.component'

const routes: Routes = [
  {path: 'collateral', component: CollateralMainComponent},

  {path: 'collateral-add', component: CollateralAddComponent},
  {path: 'collateral-inquire', component: CollateralInquireComponent},
  {path: 'collateral-modify', component: CollateralModifyComponent},
  {path: 'collateral-delete', component: CollateralDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
