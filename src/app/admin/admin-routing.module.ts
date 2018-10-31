import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AdminAppComponent} from './admin-app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAuthGuard } from './user-auth.guard';
import { OverviewComponent } from './overview/overview.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { ContactCustomerComponent } from './contact-customer/contact-customer.component';
const routes:Routes = [
	{   path:'',
		component:AdminAppComponent,
		children:[
			{ path:'',redirectTo:'login'},
			{ path:'login',component:LoginComponent },
			{
				path:'dashboard',
				canActivate:[UserAuthGuard],
				component:DashboardComponent,
				children:[
					{path:'',component:OverviewComponent},
					{path:'overview',component:OverviewComponent},
					{path:'qoutes',component:QoutesComponent},
					{path:'subscriber',component:SubscriberComponent},
					{path:'contact-customer',component:ContactCustomerComponent},
					{path:'**',component:OverviewComponent}
				]
			}
		]
	}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
