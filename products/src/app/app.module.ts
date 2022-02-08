import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterestComponent } from './components/lookup/interest/interest.component';
import { SolComponent } from './components/lookup/sol/sol.component';
import { ProductMainComponent } from './components/main/products/product-main/product-main.component';
import { ProductAddComponent } from './components/main/products/product-add/product-add.component';
import { ProductInquireComponent } from './components/main/products/product-inquire/product-inquire.component';
import { ProductModifyComponent } from './components/main/products/product-modify/product-modify.component';
import { InterestMainComponent } from './components/main/interest/interest-main/interest-main.component';
import { InterestAddComponent } from './components/main/interest/interest-add/interest-add.component';
import { InterestInquireComponent } from './components/main/interest/interest-inquire/interest-inquire.component';
import { InterestModifyComponent } from './components/main/interest/interest-modify/interest-modify.component';
import { InterestDeleteComponent } from './components/main/interest/interest-delete/interest-delete.component';
import { ProductDeleteComponent } from './components/main/products/product-delete/product-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';

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
import { ProductComponent } from './components/lookup/product/product.component';
import { AccountComponent } from './components/lookup/account/account.component';
import { SuccessComponent } from './components/status/success/success.component';
import { FailureComponent } from './components/status/failure/failure.component';
import { OdProductAddComponent } from './components/main/overdraft-product/od-product-add/od-product-add.component';
import { OdProductInquireComponent } from './components/main/overdraft-product/od-product-inquire/od-product-inquire.component';
import { OdProductModifyComponent } from './components/main/overdraft-product/od-product-modify/od-product-modify.component';
import { OdProductDeleteComponent } from './components/main/overdraft-product/od-product-delete/od-product-delete.component';
import { SbProductAddComponent } from './components/main/savings-product/sb-product-add/sb-product-add.component';
import { SbProductInquireComponent } from './components/main/savings-product/sb-product-inquire/sb-product-inquire.component';
import { SbProductModifyComponent } from './components/main/savings-product/sb-product-modify/sb-product-modify.component';
import { SbProductDeleteComponent } from './components/main/savings-product/sb-product-delete/sb-product-delete.component';
import { TdProductAddComponent } from './components/main/td-product/td-product-add/td-product-add.component';
import { TdProductInquireComponent } from './components/main/td-product/td-product-inquire/td-product-inquire.component';
import { TdProductModifyComponent } from './components/main/td-product/td-product-modify/td-product-modify.component';
import { TdProductDeleteComponent } from './components/main/td-product/td-product-delete/td-product-delete.component';
import { TdProductComponent } from './components/lookup/td-product/td-product.component';
import { SbProductComponent } from './components/lookup/sb-product/sb-product.component';
import { OdProductComponent } from './components/lookup/od-product/od-product.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestComponent,
    SolComponent,
    ProductMainComponent,
    ProductAddComponent,
    ProductInquireComponent,
    ProductModifyComponent,
    InterestMainComponent,
    InterestAddComponent,
    InterestInquireComponent,
    InterestModifyComponent,
    InterestDeleteComponent,
    ProductDeleteComponent,
    ProductComponent,
    AccountComponent,
    SuccessComponent,
    FailureComponent,
    OdProductAddComponent,
    OdProductInquireComponent,
    OdProductModifyComponent,
    OdProductDeleteComponent,
    SbProductAddComponent,
    SbProductInquireComponent,
    SbProductModifyComponent,
    SbProductDeleteComponent,
    TdProductAddComponent,
    TdProductInquireComponent,
    TdProductModifyComponent,
    TdProductDeleteComponent,
    TdProductComponent,
    SbProductComponent,
    OdProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
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
    MatTabsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
