import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollateralMainComponent } from './components/main/collateral-main/collateral-main.component';
import { CorporateComponent } from './components/lookup/corporate/corporate.component';
import { RetailComponent } from './components/lookup/retail/retail.component';
import { CollateralAddComponent } from './components/main/collateral-add/collateral-add.component';
import { CollateralInquireComponent } from './components/main/collateral-inquire/collateral-inquire.component';
import { CollateralModifyComponent } from './components/main/collateral-modify/collateral-modify.component';
import { CollateralDeleteComponent } from './components/main/collateral-delete/collateral-delete.component';

import { FormsModule } from '@angular/forms';
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
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SuccessComponent } from './components/status/success/success.component';
import { FailureComponent } from './components/status/failure/failure.component';

@NgModule({
  declarations: [
    AppComponent,
    CollateralMainComponent,
    CorporateComponent,
    RetailComponent,
    CollateralAddComponent,
    CollateralInquireComponent,
    CollateralModifyComponent,
    CollateralDeleteComponent,
    SuccessComponent,
    FailureComponent
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
    MatCheckboxModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
