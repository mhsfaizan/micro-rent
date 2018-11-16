import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { CarousalComponent } from './carousal/carousal.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridComponent } from './grid/grid.component';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { GetquoteComponent } from './getquote/getquote.component';
import {MatSelectModule} from '@angular/material/select';
import { ContactusComponent } from './contactus/contactus.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { LaprentalComponent } from './laprental/laprental.component';
import { RentalSolutionComponent } from './rental-solution/rental-solution.component';
import { ProductsComponent } from './products/products.component';
import { IpadrentalComponent } from './ipadrental/ipadrental.component';
import { WorkstationrentalComponent } from './workstationrental/workstationrental.component';
import { ServerrentalComponent } from './serverrental/serverrental.component';
import { PrinterrentalComponent } from './printerrental/printerrental.component';
import { ApplerentalComponent } from './applerental/applerental.component';
import { DesktoprentalComponent } from './desktoprental/desktoprental.component';
import { ProjectorrentalComponent } from './projectorrental/projectorrental.component';
import { MyDialogueComponent } from './my-dialogue/my-dialogue.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { TermConditionComponent } from './term-condition/term-condition.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarousalComponent,
    GridComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SubscribeComponent,
    GetquoteComponent,
    ContactusComponent,
    LaprentalComponent,
    RentalSolutionComponent,
    ProductsComponent,
    IpadrentalComponent,
    WorkstationrentalComponent,
    ServerrentalComponent,
    PrinterrentalComponent,
    ApplerentalComponent,
    DesktoprentalComponent,
    ProjectorrentalComponent,
    MyDialogueComponent,
    NotFoundComponent,
    TermConditionComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatExpansionModule,
    SweetAlert2Module.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database,
    AngularFireAuthModule
  ],
  entryComponents: [
        MyDialogueComponent
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
