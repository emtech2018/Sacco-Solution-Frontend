import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBranchComponent } from './components/main/branch/main-branch/main-branch.component';
import { AddBranchComponent } from './components/main/branch/add-branch/add-branch.component';
import { InquireBranchComponent } from './components/main/branch/inquire-branch/inquire-branch.component';
import { ModifyBranchComponent } from './components/main/branch/modify-branch/modify-branch.component';
import { DeleteBranchComponent } from './components/main/branch/delete-branch/delete-branch.component';
import { BranchComponent } from './components/lookup/branch/branch.component';

import { FormsModule } from '@angular/forms';
import {MatCardModule}  from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule}  from '@angular/material/input';
import {MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


import { FailureComponent } from './components/status/failure/failure.component';
import { SuccessComponent } from './components/status/success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    MainBranchComponent,
    AddBranchComponent,
    InquireBranchComponent,
    ModifyBranchComponent,
    DeleteBranchComponent,
    BranchComponent,
    FailureComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
