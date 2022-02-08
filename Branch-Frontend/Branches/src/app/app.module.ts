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

@NgModule({
  declarations: [
    AppComponent,
    MainBranchComponent,
    AddBranchComponent,
    InquireBranchComponent,
    ModifyBranchComponent,
    DeleteBranchComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
