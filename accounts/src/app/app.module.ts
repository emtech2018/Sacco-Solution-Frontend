import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanAccountComponent } from './components/loan-account/loan-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomerComponent } from './components/lookup/customer/customer.component';
import { UserComponent } from './components/lookup/user/user.component';
import { ProductComponent } from './components/lookup/product/product.component';
import { GlSubheadComponent } from './components/lookup/gl-subhead/gl-subhead.component';
import { BranchComponent } from './components/lookup/branch/branch.component';


import { LoanAccountLookupComponent } from './components/loan-account/loan-account-lookup/loan-account-lookup.component';
import { LoanAccountMaintainanceComponent } from './components/loan-account/loan-account-maintainance/loan-account-maintainance.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoanAccountComponent,
    CustomerComponent,
    UserComponent,
    ProductComponent,
    LoanAccountLookupComponent,
    LoanAccountMaintainanceComponent,
    GlSubheadComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  exports: [
    MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
