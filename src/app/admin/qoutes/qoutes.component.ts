import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { AdminServiceService} from '../services/admin-service.service'
import { Observable,of} from 'rxjs';
@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {
  qoutes = [];
  myData = [];
  displayedColumns: string[] = ['name','email','company','message'];
  constructor(private _admin: AdminServiceService, private changeDetectorRefs:ChangeDetectorRef) { 

  }
  ngOnInit() {
  	this.getQoutes((qoutes)=>{
      this.myData = qoutes;
      if (!this.changeDetectorRefs['destroyed']) {
        this.changeDetectorRefs.detectChanges();
      }
    });
  }
  getQoutes(cb){
  	this._admin.getQoute()
    .on("value",(snapshot)=>{
       this.qoutes = [];
       let data = snapshot.val();
       for(let i in data){
         if(data[i].isqoute==true){
           this.qoutes.push(data[i]);
         }
       }
      console.log(this.qoutes)
      cb(this.qoutes);
    },(err)=>console.log(err));
  }
}
