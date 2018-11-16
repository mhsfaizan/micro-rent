import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
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
  
  getSubscribedUsers(){
    let ref = this._db.database.ref("subscribers/");
    return ref;
  }

  submitReviewService(formData) {
    let ref = this._db.database.ref("reviews/");
    return ref.push(formData);
  }
  deleteReview(id){
    let ref = this._db.database.ref("reviews/"+id);
    return ref.remove();
  }
}
