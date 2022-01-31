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
