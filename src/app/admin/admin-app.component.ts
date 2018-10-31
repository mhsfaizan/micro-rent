import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent implements OnInit {

  constructor(private _app:AppComponent) { }

  ngOnInit() {
  	 this._app.isShow = false;
  }
 

}
