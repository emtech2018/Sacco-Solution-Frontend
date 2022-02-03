import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainKycComponent} from 'src/app/components/main/main-kyc/main-kyc.component'

import {RetailAddComponent} from 'src/app/components/main/retail-kyc/retail-add/retail-add.component'
import {RetailInquireComponent} from 'src/app/components/main/retail-kyc/retail-inquire/retail-inquire.component'
import {RetailModifyComponent} from 'src/app/components/main/retail-kyc/retail-modify/retail-modify.component'
import {RetailDeleteComponent} from 'src/app/components/main/retail-kyc/retail-delete/retail-delete.component'

import{CorporateAddComponent} from 'src/app/components/main/corporate-kyc/corporate-add/corporate-add.component'
import{CorporateInquireComponent} from 'src/app/components/main/corporate-kyc/corporate-inquire/corporate-inquire.component'
import{CorporateModifyComponent} from 'src/app/components/main/corporate-kyc/corporate-modify/corporate-modify.component'
import{CorporateDeleteComponent} from 'src/app/components/main/corporate-kyc/corporate-delete/corporate-delete.component'

const routes: Routes = [
  {path: 'kyc', component: MainKycComponent},

  {path: 'retail-add', component: RetailAddComponent},
  {path: 'retail-inquire', component: RetailInquireComponent},
  {path: 'retail-modify', component: RetailModifyComponent},
  {path: 'retail-delete', component: RetailDeleteComponent},
  {path: 'corporate-add', component: CorporateAddComponent},
  {path: 'corporate-inquire', component: CorporateInquireComponent},
  {path: 'corporate-modify', component: CorporateModifyComponent},
  {path: 'corporate-delete', component: CorporateDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
