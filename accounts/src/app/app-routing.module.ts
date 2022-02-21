import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoanAccountMaintainanceComponent} from 'src/app/components/loan-account/loan-account-maintainance/loan-account-maintainance.component'
import {LoanAccountComponent} from 'src/app/components/loan-account/loan-account.component'



// import {AccountMainComponent} from 'src/app/components/main/account-main/account-main.component'

// import {LoanAccountAddComponent} from 'src/app/components/main/accounts/loan/loan-account-add/loan-account-add.component'
// import {LoanAccountInquireComponent} from 'src/app/components/main/accounts/loan/loan-account-inquire/loan-account-inquire.component'
// import {LoanAccountModifyComponent} from 'src/app/components/main/accounts/loan/loan-account-modify/loan-account-modify.component'
// import {LoanAccountDeleteComponent} from 'src/app/components/main/accounts/loan/loan-account-delete/loan-account-delete.component'

// import {SbAccountAddComponent} from 'src/app/components/main/accounts/savings/sb-account-add/sb-account-add.component'
// import {SbAccountInquireComponent} from 'src/app/components/main/accounts/savings/sb-account-inquire/sb-account-inquire.component'
// import {SbAccountModifyComponent} from 'src/app/components/main/accounts/savings/sb-account-modify/sb-account-modify.component'
// import {SbAccountDeleteComponent} from 'src/app/components/main/accounts/savings/sb-account-delete/sb-account-delete.component'

// import {TdAccountAddComponent} from 'src/app/components/main/accounts/term-deposit/td-account-add/td-account-add.component'
// import {TdAccountInquireComponent} from 'src/app/components/main/accounts/term-deposit/td-account-inquire/td-account-inquire.component'
// import {TdAccountModifyComponent} from 'src/app/components/main/accounts/term-deposit/td-account-modify/td-account-modify.component'
// import {TdAccountDeleteComponent} from 'src/app/components/main/accounts/term-deposit/td-account-delete/td-account-delete.component'

// import {OdAccountAddComponent} from 'src/app/components/main/accounts/over-draft/od-account-add/od-account-add.component'
// import {OdAccountInquireComponent} from 'src/app/components/main/accounts/over-draft/od-account-inquire/od-account-inquire.component'
// import {OdAccountModifyComponent} from 'src/app/components/main/accounts/over-draft/od-account-modify/od-account-modify.component'
// import {OdAccountDeleteComponent} from 'src/app/components/main/accounts/over-draft/od-account-delete/od-account-delete.component'

// import {OfficeAccountAddComponent} from 'src/app/components/main/accounts/office/office-account-add/office-account-add.component'
// import {OfficeAccountInquireComponent} from 'src/app/components/main/accounts/office/office-account-inquire/office-account-inquire.component'
// import {OfficeAccountModifyComponent} from 'src/app/components/main/accounts/office/office-account-modify/office-account-modify.component'
// import {OfficeAccountDeleteComponent} from 'src/app/components/main/accounts/office/office-account-delete/office-account-delete.component'

// //status messages
// import { SuccessComponent} from 'src/app/components/status/success/success.component'
// import {FailureComponent} from 'src/app/components/status/failure/failure.component'

const routes: Routes = [

  // {path: 'accounts', component: AccountMainComponent},

  // {path: 'loan-account-add', component: LoanAccountAddComponent},
  // {path: 'loan-account-inquire/:id', component: LoanAccountInquireComponent},
  // {path: 'loan-account-modify/:id', component: LoanAccountModifyComponent},
  // {path: 'loan-account-delete/:id', component: LoanAccountDeleteComponent},

  // {path: 'sb-account-add', component: SbAccountAddComponent},
  // {path: 'sb-account-inquire/:id', component: SbAccountInquireComponent},
  // {path: 'sb-account-modify/:id', component: SbAccountModifyComponent},
  // {path: 'sb-account-delete/:id', component: SbAccountDeleteComponent},

  // {path: 'td-account-add', component: TdAccountAddComponent},
  // {path: 'td-account-inquire/:id', component: TdAccountInquireComponent},
  // {path: 'td-account-modify/:id', component: TdAccountModifyComponent},
  // {path: 'td-account-delete/:id', component: TdAccountDeleteComponent},

  // {path: 'od-account-add', component: OdAccountAddComponent},
  // {path: 'od-account-inquire/:id', component: OdAccountInquireComponent},
  // {path: 'od-account-modify/:id', component: OdAccountModifyComponent},
  // {path: 'od-account-delete/:id', component: OdAccountDeleteComponent},

  // {path: 'office-account-add', component: OfficeAccountAddComponent},
  // {path: 'office-account-inquire/:id', component: OfficeAccountInquireComponent},
  // {path: 'office-account-modify/:id', component: OfficeAccountModifyComponent},
  // {path: 'office-account-delete/:id', component: OfficeAccountDeleteComponent},

  // {path: 'success', component: SuccessComponent},
  // {path: 'failure', component: FailureComponent},

  {path: 'loan-account-maintainance', component: LoanAccountMaintainanceComponent},
  {path: 'loan-account', component: LoanAccountComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
