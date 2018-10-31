import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdminServiceService } from '../services/admin-service.service'
import { Router } from  '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,private _router:Router,private _admin:AdminServiceService) {}
   logout(){
	  	this._admin.signout().signOut();
	  	localStorage.clear();
	  	this._router.navigate(["./adminpanel/login"]);
	   }  
}
