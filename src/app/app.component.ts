import { Component ,OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router,RoutesRecognized,NavigationEnd } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isShow:boolean = true;
	constructor(private _meta:Meta,private _title:Title,private router:Router) {}
	ngOnInit(){
	  //calls this method when navigation ends
      this.router.events.subscribe(data => {
        if (data instanceof RoutesRecognized) {
          var dt = data.state.root.firstChild.data;
          this._title.setTitle(dt.title);
          this._meta.updateTag({name:'description',content:dt.description});
        }
        if(data instanceof NavigationEnd){
          document.getElementById("main").scrollIntoView();
        }
      });
	}
}
