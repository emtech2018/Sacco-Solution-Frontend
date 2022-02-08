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

import {CorporateResolver} from 'src/app/resolvers/corporate.resolver'
import {RetailResolver} from 'src/app/resolvers/retail.resolver'

//status messages
import { SuccessComponent} from 'src/app/components/status/success/success.component'
import {FailureComponent} from 'src/app/components/status/failure/failure.component'

const routes: Routes = [
  {path: 'kyc', component: MainKycComponent},

  {path: 'retail-add', component: RetailAddComponent},
  {path: 'retail-inquire/:id', component: RetailInquireComponent, resolve: {customer: RetailResolver}},
  {path: 'retail-modify/:id', component: RetailModifyComponent, resolve: {customer: RetailResolver}},
  {path: 'retail-delete/:id', component: RetailDeleteComponent, resolve: {customer: RetailResolver}},
  {path: 'corporate-add', component: CorporateAddComponent},
  {path: 'corporate-inquire/:id', component: CorporateInquireComponent, resolve: {customer: CorporateResolver}},
  {path: 'corporate-modify/:id', component: CorporateModifyComponent, resolve: {customer: CorporateResolver}},
  {path: 'corporate-delete/:id', component: CorporateDeleteComponent, resolve: {customer: CorporateResolver}},

  
  {path: 'success', component: SuccessComponent},
  {path: 'failure', component: FailureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
