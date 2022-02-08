import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountMainComponent } from './components/main/account-main/account-main.component';
import { LoanAccountComponent } from './components/lookup/loan-account/loan-account.component';
import { LoanAccountAddComponent } from './components/main/accounts/loan/loan-account-add/loan-account-add.component';
import { SbAccountAddComponent } from './components/main/accounts/savings/sb-account-add/sb-account-add.component';
import { TdAccountAddComponent } from './components/main/accounts/term-deposit/td-account-add/td-account-add.component';
import { OdAccountAddComponent } from './components/main/accounts/over-draft/od-account-add/od-account-add.component';
import { OfficeAccountAddComponent } from './components/main/accounts/office/office-account-add/office-account-add.component';
import { OfficeAccountInquireComponent } from './components/main/accounts/office/office-account-inquire/office-account-inquire.component';
import { OfficeAccountModifyComponent } from './components/main/accounts/office/office-account-modify/office-account-modify.component';
import { OfficeAccountDeleteComponent } from './components/main/accounts/office/office-account-delete/office-account-delete.component';
import { OdAccountInquireComponent } from './components/main/accounts/over-draft/od-account-inquire/od-account-inquire.component';
import { OdAccountModifyComponent } from './components/main/accounts/over-draft/od-account-modify/od-account-modify.component';
import { OdAccountDeleteComponent } from './components/main/accounts/over-draft/od-account-delete/od-account-delete.component';
import { SbAccountInquireComponent } from './components/main/accounts/savings/sb-account-inquire/sb-account-inquire.component';
import { SbAccountModifyComponent } from './components/main/accounts/savings/sb-account-modify/sb-account-modify.component';
import { SbAccountDeleteComponent } from './components/main/accounts/savings/sb-account-delete/sb-account-delete.component';
import { TdAccountInquireComponent } from './components/main/accounts/term-deposit/td-account-inquire/td-account-inquire.component';
import { TdAccountModifyComponent } from './components/main/accounts/term-deposit/td-account-modify/td-account-modify.component';
import { TdAccountDeleteComponent } from './components/main/accounts/term-deposit/td-account-delete/td-account-delete.component';
import { TdAccountComponent } from './components/lookup/td-account/td-account.component';
import { OdAccountComponent } from './components/lookup/od-account/od-account.component';
import { SbAccountComponent } from './components/lookup/sb-account/sb-account.component';
import { OfficeAccountComponent } from './components/lookup/office-account/office-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountMainComponent,
    LoanAccountComponent,
    LoanAccountAddComponent,
    SbAccountAddComponent,
    TdAccountAddComponent,
    OdAccountAddComponent,
    OfficeAccountAddComponent,
    OfficeAccountInquireComponent,
    OfficeAccountModifyComponent,
    OfficeAccountDeleteComponent,
    OdAccountInquireComponent,
    OdAccountModifyComponent,
    OdAccountDeleteComponent,
    SbAccountInquireComponent,
    SbAccountModifyComponent,
    SbAccountDeleteComponent,
    TdAccountInquireComponent,
    TdAccountModifyComponent,
    TdAccountDeleteComponent,
    TdAccountComponent,
    OdAccountComponent,
    SbAccountComponent,
    OfficeAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
