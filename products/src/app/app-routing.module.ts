import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProductMainComponent} from 'src/app/components/main/products/product-main/product-main.component'
import {ProductAddComponent} from 'src/app/components/main/products/product-add/product-add.component'
import {ProductInquireComponent} from 'src/app/components/main/products/product-inquire/product-inquire.component'
import {ProductModifyComponent} from 'src/app/components/main/products/product-modify/product-modify.component'
import {ProductDeleteComponent} from 'src/app/components/main/products/product-delete/product-delete.component'

import {InterestMainComponent} from 'src/app/components/main/interest/interest-main/interest-main.component'
import {InterestAddComponent} from 'src/app/components/main/interest/interest-add/interest-add.component'
import {InterestInquireComponent} from 'src/app/components/main/interest/interest-inquire/interest-inquire.component'
import {InterestModifyComponent} from 'src/app/components/main/interest/interest-modify/interest-modify.component'
import {InterestDeleteComponent} from 'src/app/components/main/interest/interest-delete/interest-delete.component'


//resolvers
import {ProductResolverResolver} from 'src/app/resolvers/product-resolver.resolver'
import {InterestResolverResolver} from 'src/app/resolvers/interest-resolver.resolver'

//status messages
import { SuccessComponent} from 'src/app/components/status/success/success.component'
import {FailureComponent} from 'src/app/components/status/failure/failure.component'




const routes: Routes = [
  {path: 'product', component: ProductMainComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product-inquire/:id', component:ProductInquireComponent, resolve: {product: ProductResolverResolver}},
  {path: 'product-modify/:id', component:ProductModifyComponent, resolve: {product: ProductResolverResolver}},
  {path: 'product-delete/:id', component:ProductDeleteComponent, resolve: {product: ProductResolverResolver}},


  {path: 'interest', component: InterestMainComponent},
  {path: 'interest-add', component: InterestAddComponent},
  {path: 'interest-inquire/:id', component:InterestInquireComponent, resolve: {interest: InterestResolverResolver}},
  {path: 'interest-modify/:id', component:InterestModifyComponent, resolve: {interest: InterestResolverResolver}},
  {path: 'interest-delete/:id', component:InterestDeleteComponent, resolve: {interest: InterestResolverResolver}},

  {path: 'success', component: SuccessComponent},
  {path: 'failure', component: FailureComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
