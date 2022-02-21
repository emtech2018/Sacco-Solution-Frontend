import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainKycComponent } from './components/main/main-kyc/main-kyc.component';
import { RetailAddComponent } from './components/main/retail-kyc/retail-add/retail-add.component';
import { RetailModifyComponent } from './components/main/retail-kyc/retail-modify/retail-modify.component';
import { RetailInquireComponent } from './components/main/retail-kyc/retail-inquire/retail-inquire.component';
import { RetailDeleteComponent } from './components/main/retail-kyc/retail-delete/retail-delete.component';
import { CorporateDeleteComponent } from './components/main/corporate-kyc/corporate-delete/corporate-delete.component';
import { CorporateAddComponent } from './components/main/corporate-kyc/corporate-add/corporate-add.component';
import { CorporateInquireComponent } from './components/main/corporate-kyc/corporate-inquire/corporate-inquire.component';
import { CorporateModifyComponent } from './components/main/corporate-kyc/corporate-modify/corporate-modify.component';
import { CorporateComponent } from './components/lookup/corporate/corporate.component';
import { RetailComponent } from './components/lookup/retail/retail.component';
import { EmployerComponent } from './components/lookup/employer/employer.component';

import {MatRadioModule} from '@angular/material/radio';



import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { FailureComponent } from './components/status/failure/failure.component';
import { SuccessComponent } from './components/status/success/success.component';
import { ParamAddComponent } from './components/params/param-add/param-add.component';
import { ParamInquireComponent } from './components/params/param-inquire/param-inquire.component';
import { ParamMainComponent } from './components/params/param-main/param-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainKycComponent,
    RetailAddComponent,
    RetailModifyComponent,
    RetailInquireComponent,
    RetailDeleteComponent,
    CorporateDeleteComponent,
    CorporateAddComponent,
    CorporateInquireComponent,
    CorporateModifyComponent,
    CorporateComponent,
    RetailComponent,
    EmployerComponent,
    FailureComponent,
    SuccessComponent,
    ParamAddComponent,
    ParamInquireComponent,
    ParamMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
