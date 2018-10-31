import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  col = 5;
  col1 = 4;
  col2 = 2;
  constructor() { }

  ngOnInit() {
  	if(screen.width<768){
  		this.col = 3;
  		this.col1 = 3;
  	}
  	if(screen.width<412){
  		this.col2 = 1;
  		this.col = 2;
  		this.col1 = 2;		
  	}
  }

 
}
