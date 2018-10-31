import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { AdminServiceService} from '../services/admin-service.service'

@Component({
  selector: 'app-contact-customer',
  templateUrl: './contact-customer.component.html',
  styleUrls: ['./contact-customer.component.css']
})
export class ContactCustomerComponent implements OnInit {

  constructor(private _admin: AdminServiceService, private changeDetectorRefs:ChangeDetectorRef) { }
  contact = [];
  myData = [];
  displayedColumns: string[] = ['name','email','message'];
  ngOnInit() {
  	this.getContactCustomer((data)=>{
  		this.myData = data;
  		this.changeDetectorRefs.detectChanges();
  	})
  }
  getContactCustomer(cb){
  	this._admin.getQoute()
  	    .on("value",(snapshot)=>{
           this.contact = [];
           let data = snapshot.val();
            for(let i in data){
	            if(data[i].isqoute==false){
	               this.contact.push(data[i]);
	            }
            }
           cb(this.contact);
        },(err)=>console.log(err));
  }
}
