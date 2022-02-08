import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProductMainComponent} from 'src/app/components/main/products/product-main/product-main.component'
import {InterestMainComponent} from 'src/app/components/main/interest/interest-main/interest-main.component'

//loan products
import {ProductAddComponent} from 'src/app/components/main/products/product-add/product-add.component'
import {ProductInquireComponent} from 'src/app/components/main/products/product-inquire/product-inquire.component'
import {ProductModifyComponent} from 'src/app/components/main/products/product-modify/product-modify.component'
import {ProductDeleteComponent} from 'src/app/components/main/products/product-delete/product-delete.component'

//savings product
import {SbProductAddComponent} from 'src/app/components/main/savings-product/sb-product-add/sb-product-add.component'
import {SbProductInquireComponent} from 'src/app/components/main/savings-product/sb-product-inquire/sb-product-inquire.component'
import {SbProductModifyComponent} from 'src/app/components/main/savings-product/sb-product-modify/sb-product-modify.component'
import {SbProductDeleteComponent} from 'src/app/components/main/savings-product/sb-product-delete/sb-product-delete.component'
//overdraft product
import {OdProductAddComponent} from 'src/app/components/main/overdraft-product/od-product-add/od-product-add.component'
import {OdProductInquireComponent} from 'src/app/components/main/overdraft-product/od-product-inquire/od-product-inquire.component'
import {OdProductModifyComponent} from 'src/app/components/main/overdraft-product/od-product-modify/od-product-modify.component'
import {OdProductDeleteComponent} from 'src/app/components/main/overdraft-product/od-product-delete/od-product-delete.component'

//term deposits
import {TdProductAddComponent} from 'src/app/components/main/td-product/td-product-add/td-product-add.component'
import {TdProductInquireComponent} from 'src/app/components/main/td-product/td-product-inquire/td-product-inquire.component'
import {TdProductModifyComponent} from 'src/app/components/main/td-product/td-product-modify/td-product-modify.component'
import {TdProductDeleteComponent} from 'src/app/components/main/td-product/td-product-delete/td-product-delete.component'


import {InterestAddComponent} from 'src/app/components/main/interest/interest-add/interest-add.component'
import {InterestInquireComponent} from 'src/app/components/main/interest/interest-inquire/interest-inquire.component'
import {InterestModifyComponent} from 'src/app/components/main/interest/interest-modify/interest-modify.component'
import {InterestDeleteComponent} from 'src/app/components/main/interest/interest-delete/interest-delete.component'


//resolvers
import {ProductResolverResolver} from 'src/app/resolvers/product-resolver.resolver'
import {SbProductResolver} from 'src/app/resolvers/sb-product.resolver'
import {OdProductResolver} from 'src/app/resolvers/od-product.resolver'
import {TdProductResolver} from 'src/app/resolvers/td-product.resolver'
import {InterestResolverResolver} from 'src/app/resolvers/interest-resolver.resolver'

//status messages
import { SuccessComponent} from 'src/app/components/status/success/success.component'
import {FailureComponent} from 'src/app/components/status/failure/failure.component'




const routes: Routes = [
  {path: 'product', component: ProductMainComponent},

  //loan products
  {path: 'loan-product-add', component: ProductAddComponent},
  {path: 'loan-product-inquire/:id', component:ProductInquireComponent, resolve: {product: ProductResolverResolver}},
  {path: 'loan-product-modify/:id', component:ProductModifyComponent, resolve: {product: ProductResolverResolver}},
  {path: 'loan-product-delete/:id', component:ProductDeleteComponent, resolve: {product: ProductResolverResolver}},
  //td product
  {path: 'td-product-add', component: TdProductAddComponent},
  {path: 'td-product-inquire/:id', component: TdProductInquireComponent, resolve: {product: TdProductResolver}},
  {path: 'td-product-modify/:id', component: TdProductModifyComponent, resolve: {product: TdProductResolver}},
  {path: 'td-product-delete/:id', component: TdProductDeleteComponent, resolve: {product: TdProductResolver}},

  //od product
  {path: 'od-product-add', component: OdProductAddComponent},
  {path: 'od-product-inquire/:id', component: OdProductInquireComponent, resolve: {product: OdProductResolver}},
  {path: 'od-product-modify/:id', component: OdProductModifyComponent, resolve: {product: OdProductResolver}},
  {path: 'od-product-delete/:id', component: OdProductDeleteComponent, resolve: {product: OdProductResolver}},

  //sb product
  {path: 'sb-product-add', component: SbProductAddComponent},
  {path: 'sb-product-inquire/:id', component: SbProductInquireComponent, resolve: {product: SbProductResolver}},
  {path: 'sb-product-modify/:id', component: SbProductModifyComponent, resolve: {product: SbProductResolver}},
  {path: 'sb-product-delete/:id', component: SbProductDeleteComponent, resolve: {product: SbProductResolver}},

  //interest
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
