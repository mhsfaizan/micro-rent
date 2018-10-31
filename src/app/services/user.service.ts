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
  // public convertToForm(value){
  // 	var fd = new FormData();
  // 	for(let val in value){
	 //  	fd.append(val,value[val]);
  // 	}
  // 	return fd;
  // }
  // postQuote(value,isToQoute){
  // 	let fd = this.convertToForm(value);
  //   if(!isToQoute){
  //     fd.append("company","");
  //     fd.append("subject","");
  //   }
  //   fd.append("date_time",JSON.stringify(new Date()));
  // 	fd.append('isToQoute',isToQoute);
  // 	return this._http.post("backendApi/get-quote.php",fd);
  // }
  postQuote(value){
    return this.qouteRef.push(value);
  }
  subscribe(value){
    let email = {};
    email['email'] = value;
    return this.subscribeRef.push(email);
  }
  
}
