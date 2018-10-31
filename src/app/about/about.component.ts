import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  col4 = 2;
  constructor() { }

  ngOnInit() {
  	if(screen.width<768){
  		this.col4 = 1;
  	}
  }

}
