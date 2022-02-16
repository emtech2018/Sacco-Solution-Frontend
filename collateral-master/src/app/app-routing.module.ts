import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollateralComponent } from './collateral/collateral.component';
import { CollateralLookupComponent } from './collateral/collateral-lookup/collateral-lookup.component';
import { CollateralMaintenaceComponent } from './collateral/collateral-maintenace/collateral-maintenace.component';
const routes: Routes = [
  {path:'main',component:CollateralMaintenaceComponent},
  {path:'add', component:CollateralComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
