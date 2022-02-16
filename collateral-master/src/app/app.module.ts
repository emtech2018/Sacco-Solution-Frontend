import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollateralComponent } from './collateral/collateral.component';
import { CollateralLookupComponent } from './collateral/collateral-lookup/collateral-lookup.component';
import { CollateralMaintenaceComponent } from './collateral/collateral-maintenace/collateral-maintenace.component';
import { ChargesLookupComponent } from './collateral/charges-lookup/charges-lookup.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CollateralComponent,
    CollateralLookupComponent,
    CollateralMaintenaceComponent,
    ChargesLookupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    
  ],
  exports: [
    MaterialModule
  ],

    
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
