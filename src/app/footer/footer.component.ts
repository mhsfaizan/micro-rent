import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  col3 = 3;
  y = .8;
  ngOnInit() {
  	if(screen.width<768){
  		this.col3 = 2;
      this.y = 1.5;
  	}
  	if(screen.width<=300){
      this.col3 = 1;
  	}
  }

}
