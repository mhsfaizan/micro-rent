import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor() { }
  options  = { fullWidth: true,indicators: true};
  ngOnInit() {
  	var elems = document.querySelectorAll('.main-carousal');
    var instances = M.Carousel.init(elems, this.options);
    setInterval(()=>{  
    	var instance = M.Carousel.getInstance(elems[0]);
    	instance.next();
    },5000);
  }
}
