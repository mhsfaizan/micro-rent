import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  qouteRef: AngularFireList<Object> = null;
  subscribeRef: AngularFireList<Object> = null;
  constructor(private _http:HttpClient,private db:AngularFireDatabase) {
    this.qouteRef =  this.db.list("/qoutes");
    this.subscribeRef = this.db.list("/subscribers");
  }

  postQuote(value){
    return this.qouteRef.push(value);
  }
  
  subscribe(value){
    let email = {};
    email['email'] = value;
    return this.subscribeRef.push(email);
  }
  
  getClientReviews() {
    let ref = this.db.database.ref("reviews/");
    return ref;
  }
}
