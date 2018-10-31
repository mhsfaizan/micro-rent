import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  options1 = { 
    indicators: true,
    fullWidth:true
   };
  ngOnInit() {
    var elems1 = document.querySelectorAll('.client-carousal');
    var instances = M.Carousel.init(elems1, this.options1);
    setInterval(()=>{  
    	var instance = M.Carousel.getInstance(elems1[0]);
    	instance.next();
    },5000);
  }

}
