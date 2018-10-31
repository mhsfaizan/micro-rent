import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private _db:AngularFireDatabase,private _angauth:AngularFireAuth) {  }
  login(loginData){
  	return this._angauth.auth
  	.signInWithEmailAndPassword(loginData.email, loginData.password)
  	
  }
  signout(){
  	return this._angauth.auth;
  }
  isLoggedIn(){
  	if(localStorage.getItem("username")!=null){
  		return true;
  	}
  	else{
  		return false;
  	}
  }
  getQoute(){
    let ref = this._db.database.ref("qoutes/");
    return ref;
  }
}
