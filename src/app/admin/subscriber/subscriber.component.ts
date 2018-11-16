import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { AdminServiceService} from '../services/admin-service.service'

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent implements OnInit {

  subscribedUsers = [];

  constructor(private _admin: AdminServiceService, private changeDetectorRefs:ChangeDetectorRef) { }

  ngOnInit() {
  	this.getSubscribedUers((subscribedUsers)=>{
  	  this.subscribedUsers = subscribedUsers;
      if (!this.changeDetectorRefs['destroyed']) {
        this.changeDetectorRefs.detectChanges();
      }
    });
  }
  getSubscribedUers(cb){
  	this._admin.getSubscribedUsers()
    .on("value",(snapshot)=>{
       	this.subscribedUsers = [];
       	let data = snapshot.val();
       	for(let i in data){
          this.subscribedUsers.push(data[i]);
       	}
       	console.log(this.subscribedUsers);
       	cb(this.subscribedUsers);
    },(err)=>console.log(err));
  }
}
