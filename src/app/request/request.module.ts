// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
// import { FormsModule } from '@angular/forms';
// import { MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatAutocompleteModule, MatTabsModule } from '@angular/material';
import { RequestComponent } from './request/request.component';
import { RequestItemComponent } from './request-item/request-item.component';

import { RequestRoutingModule } from './request-routing.module';


@NgModule({
  declarations: [
    RequestComponent,
    RequestItemComponent
  ],
  imports: [
    RequestRoutingModule
    // LayoutModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDatepickerModule,
    // FormsModule,
    // MatNativeDateModule,
    // MatStepperModule,
    // MatAutocompleteModule,
    // MatTabsModule,
    // AppRoutingModule,
  ]
})
export class RequestModule { }
