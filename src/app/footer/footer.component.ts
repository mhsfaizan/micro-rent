import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  col3 = 3;
  y = .7;
  ngOnInit() {
    if (screen.width > 768 && screen.width < 900) {
      this.col3 = 3;
      this.y = 1;
    }
    if(screen.width < 768){
  		this.col3 = 2;
      this.y = 1.2;
  	}
  	if(screen.width<=300){
      this.col3 = 1;
  	}
  }

}
