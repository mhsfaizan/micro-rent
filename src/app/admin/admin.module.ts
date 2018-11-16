import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './/admin-routing.module';
import { AdminAppComponent } from './admin-app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminServiceService } from './services/admin-service.service';
// import { environment } from '../../environments/environment';
// import { RouterModule } from '@angular/router';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { OverviewComponent } from './overview/overview.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { CustomerReviewDialogComponent } from './customer-review-dialog/customer-review-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatDialogModule,
    SweetAlert2Module
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule, // for database
    // AngularFireAuthModule,
    // RouterModule
  ],
  providers: [AdminServiceService],
  declarations: [
    AdminAppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    OverviewComponent,
    QoutesComponent,
    SubscriberComponent,
    ContactCustomerComponent,
    CustomerReviewComponent,
    CustomerReviewDialogComponent,
  ],
  entryComponents: [
    CustomerReviewDialogComponent
  ]
})
export class AdminModule { }
