import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from 'src/app/components/lookups/customer/customer.component'
import {GroupComponent} from 'src/app/components/main/group/group.component'
import {AddGroupComponent} from 'src/app/components/main/group/add-group/add-group.component'

const routes: Routes = [
{path: 'customer', component: CustomerComponent},
{path: 'group', component: GroupComponent},
{path: 'add-group', component: AddGroupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
