import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component' ;
import {AboutComponent} from './about/about.component' ;
import {GetquoteComponent} from './getquote/getquote.component';
import {ContactusComponent } from './contactus/contactus.component';
import { RentalSolutionComponent } from './rental-solution/rental-solution.component';
import { ProductsComponent } from './products/products.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
// import { LaprentalComponent } from "./laprental/laprental.component";
// import { IpadrentalComponent } from "./ipadrental/ipadrental.component";
// import { WorkstationrentalComponent } from "./workstationrental/workstationrental.component";
// import { ServerrentalComponent } from "./serverrental/serverrental.component";
// import { PrinterrentalComponent } from "./printerrental/printerrental.component";
// import { ApplerentalComponent } from "./applerental/applerental.component";
// import { DesktoprentalComponent } from "./desktoprental/desktoprental.component";
// import { ProjectorrentalComponent } from "./projectorrental/projectorrental.component";
import { NotFoundComponent } from "./not-found/not-found.component";



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent,data:{title:'Micro Rent|Home',description:"homeD"}},
   {path:'about',component:AboutComponent,data:{title:'Micro Rent|About',description:"aboutD"}},
   {path:'get-quote',component:GetquoteComponent,data:{title:'Micro rent|getQoute',description:"qouteD"}},
   {path:'contact-us',component:ContactusComponent,data:{title:'Micro rent|Contact',description:"contactD"}},
   {path:"rental-solution",component:RentalSolutionComponent,data:{title:'Micro Rent|Rental Solution',description:'rental solution'}},
   {path:"products",component:ProductsComponent,data:{title:'Micro Rent|Product ',description:'product '}},
   {path:'term-condition',component:TermConditionComponent,data:{title:'Micro Rent|Term Condition ',description:'term-condition'}},
   // {path:"products/lap-rental",component:LaprentalComponent,data:{title:'Micro Rent|Lap Rental ',description:'rental '}},
   // {path:"products/ipad-rental",component:IpadrentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   // {path:"products/desktop-rental",component:DesktoprentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   // {path:"products/workstation-rental",component:WorkstationrentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   // {path:"products/server-rental",component:ServerrentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   // {path:"products/printer-rental",component:PrinterrentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   // {path:"products/projector-rental",component:ProjectorrentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   // {path:"products/apple-rental",component:ApplerentalComponent,data:{title:'Micro Rent|ipad Rental ',description:'ipad '}},
   {path:'adminpanel',loadChildren:'./admin/admin.module#AdminModule'},
   {path: '**', redirectTo: '404'}, 
   {path:'404',component:NotFoundComponent}
]
@NgModule({
  imports: [
	  RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    }) 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 
	
}
