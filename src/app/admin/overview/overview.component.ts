import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { AdminServiceService} from '../services/admin-service.service'
import { Observable,of} from 'rxjs';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

	quotesLength = 0; 
	contactsLength = 0;
  subscribedUserLength = 0;

	constructor(private _admin: AdminServiceService, 
		private changeDetectorRefs: ChangeDetectorRef) { }

	ngOnInit() {
		this.getQuotes((itemsLengthObj)=>{
			this.quotesLength = itemsLengthObj.quotesLength;
			this.contactsLength = itemsLengthObj.contactsLength;
			if (!this.changeDetectorRefs['destroyed']) {
	        this.changeDetectorRefs.detectChanges();
	   	}
		});

    this.getSubscribedUers((subscribedUserLength)=>{
      this.subscribedUserLength = subscribedUserLength;
      if (!this.changeDetectorRefs['destroyed']) {
        this.changeDetectorRefs.detectChanges();
      }
    });
	}
	
  getQuotes(cb){
	this._admin.getQoute()
      .on("value",(snapshot)=>{
         	let data = snapshot.val();
 		var itemsLengthObj = { quotesLength: 0, contactsLength: 0 };
         	for(let i in data){
           	if(data[i].isqoute == true){
           		itemsLengthObj.quotesLength = itemsLengthObj.quotesLength + 1;
           	}else{
           		itemsLengthObj.contactsLength = itemsLengthObj.contactsLength + 1;
           	}
         	}
         	cb(itemsLengthObj);
      },(err)=>console.log(err));
	}

  getSubscribedUers(cb){
    this._admin.getSubscribedUsers()
    .on("value",(snapshot)=>{
         let data = snapshot.val();
         for(let i in data){
          this.subscribedUserLength  = this.subscribedUserLength + 1; 
         }
         cb(this.subscribedUserLength);
    },(err)=>console.log(err));
  }
}
