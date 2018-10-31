import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from './services/admin-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
	constructor(private _router:Router,private _admin:AdminServiceService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if(this._admin.isLoggedIn()){
     	return true;
     }
     else{
     	this._router.navigate(["./adminpanel/login"]);
     }
  }
}
