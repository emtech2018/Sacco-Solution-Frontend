import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlMainComponent } from './components/main/gl/gl-main/gl-main.component';
import { GlComponent } from './components/lookup/gl/gl.component';
import { GlSubheadsComponent } from './components/lookup/gl-subheads/gl-subheads.component';
import { GlAddComponent } from './components/main/gl/gl-add/gl-add.component';
import { GlInquireComponent } from './components/main/gl/gl-inquire/gl-inquire.component';
import { GlModifyComponent } from './components/main/gl/gl-modify/gl-modify.component';
import { GlDeleteComponent } from './components/main/gl/gl-delete/gl-delete.component';

import { GlSubheadsMainComponent } from './components/main/gl-subheads/gl-subheads-main/gl-subheads-main.component';
import { GlSubheadsAddComponent } from './components/main/gl-subheads/gl-subheads-add/gl-subheads-add.component';
import { GlSubheadsInquireComponent } from './components/main/gl-subheads/gl-subheads-inquire/gl-subheads-inquire.component';
import { GlSubheadsModifyComponent } from './components/main/gl-subheads/gl-subheads-modify/gl-subheads-modify.component';
import { GlSubheadsDeleteComponent } from './components/main/gl-subheads/gl-subheads-delete/gl-subheads-delete.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardHeader, MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatSelectModule} from '@angular/material/select';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

//status
import { SuccessComponent } from './components/status/success/success.component';
import { FailureComponent } from './components/status/failure/failure.component'

@NgModule({
  declarations: [
    AppComponent,
    GlMainComponent,
    GlComponent,
    GlSubheadsComponent,
    GlAddComponent,
    GlInquireComponent,
    GlModifyComponent,
    GlDeleteComponent,
    GlSubheadsMainComponent,
    GlSubheadsAddComponent,
    GlSubheadsInquireComponent,
    GlSubheadsModifyComponent,
    GlSubheadsDeleteComponent,
    SuccessComponent,
    FailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule, 
    MatDividerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, 
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatRadioModule,


    


    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
